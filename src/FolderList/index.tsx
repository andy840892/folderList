import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import CommunicationSwapCalls from "material-ui/svg-icons/communication/swap-calls";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "./BreadCrumbs";
import { DialogType, FolderDlgType } from "./Constrant/DialogType";
import CreateFileForm from "./CreateFileForm";
import CreateFolderForm from "./CreateFolderForm";
import FolderFileItem from "./FolderFileItem";

import { FolderFile } from "./Model/FolderFile";
import { getDirectoryList } from "./Service/service";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "80%",
      flexDirection: "column",
    },
    buttonPanel: {
      display: "flex",
    },
    contentPanel: {
      marginTop: "5rem",
      display: "flex",
      width: "80%",
    },
  })
);
interface IDialogs {
  createFolderDlg: boolean;
  createFileDlg: boolean;
}

interface IFolderList {
  currentFolder?: FolderFile;
  folderLists: FolderFile[];
}

const FolderList = () => {
  const classes = useStyles();
  const [{ createFolderDlg, createFileDlg }, setDialogs] = useState<IDialogs>({
    createFolderDlg: false,
    createFileDlg: false,
  });

  const [folderList, setFolderList] = useState<IFolderList>({
    currentFolder: undefined,
    folderLists: [],
  });

  const submitFileFolder = (folderFile: FolderFile) => {
    console.log("cuurent state", folderList, folderFile);
    setFolderList((prevState) => {
      console.log(prevState, folderFile);
      return {
        ...prevState,
        folderLists: [...prevState.folderLists, folderFile],
      };
    });

    console.log("cuurent state", folderList);
  };

  const setCurrentFolder = (folderFile: FolderFile) => {
    console.log("cuurent state", folderList, folderFile);
    setFolderList((prevState) => {
      console.log(prevState, folderFile);
      return {
        ...prevState,
        currentFolder: folderFile,
      };
    });
  };

  useEffect(() => {
    let active = true;
    (async () => {
      const directoryList = await getDirectoryList();
      if (directoryList) {
        setFolderList({
          currentFolder: undefined,
          folderLists: directoryList,
        });
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const switchDialog = (value: boolean, name: keyof typeof DialogType) => {
    setDialogs((prevState: IDialogs) => {
      const currentState = prevState;
      Object.assign(currentState, { [name! as FolderDlgType]: value });
      return {
        ...currentState,
      };
    });
  };

  return (
    <div className={classes.root}>
      <BasicBreadcrumbs />
      <div className={classes.buttonPanel}>
        <Button
          variant="contained"
          onClick={() => switchDialog(true, "createFolderDlg")}
        >
          Create Folder
        </Button>
        <Button
          variant="contained"
          onClick={() => switchDialog(true, "createFileDlg")}
        >
          Create File
        </Button>
      </div>

      {console.log(folderList)}
      <div className={classes.contentPanel}>
        {!folderList.currentFolder
          ? folderList.folderLists
              .filter((x) => !x.parentId)
              .map((x) => (
                <FolderFileItem
                  folderFile={x}
                  key={x.id}
                  onClick={setCurrentFolder}
                />
              ))
          : folderList.folderLists
              .filter((x) => x.parentId === folderList.currentFolder?.id)
              .map((x) => (
                <FolderFileItem
                  folderFile={x}
                  key={x.id}
                  onClick={setCurrentFolder}
                />
              ))}
      </div>
      <CreateFolderForm
        open={createFolderDlg}
        setOpen={switchDialog}
        submitFileFolder={submitFileFolder}
        name="createFolderDlg"
      />
      <CreateFileForm
        open={createFileDlg}
        setOpen={switchDialog}
        submitFileFolder={submitFileFolder}
        name="createFileDlg"
      />
    </div>
  );
};
export default FolderList;
