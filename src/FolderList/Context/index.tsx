import React, { createContext, memo, useState } from "react";
import { FolderFile } from "../Model/FolderFile";

export const FolderListContext = createContext({} as IFolderFileContext);

export interface IFolderFileContext {
  folderList: FolderFile[];
  currentDirectory: FolderFile;
  // createFolderFile: (folder: FolderFile) => void;
  setCurrentDirectory: (folder: FolderFile) => void;
  getCurrentDirectory: (id?: string) => FolderFile[];
}

export const FolderListProvider = memo(({ children }: { children: any }) => {
  const mokeData: FolderFile[] = [
    {
      name: "Folder1",
      id: "1",
      type: "Folder",
    },
    {
      name: "Folder2",
      id: "2",
      type: "Folder",
    },
    {
      name: "TextFile",
      id: "3",
      type: "File",
    },
  ];

  const setCurrentDirectory = (work: FolderFile) => {
    setState((prevState) => ({
      ...prevState,
      currentDirectory: work,
    }));
  };

  const getCurrentDirectory = (id?: string) => {
    return mokeData;
  };

  const [state, setState] = useState<IFolderFileContext>({
    folderList: [],
    currentDirectory: {} as FolderFile,
    setCurrentDirectory,
    getCurrentDirectory,
  });

  return (
    <FolderListContext.Provider value={state}>
      {children}
    </FolderListContext.Provider>
  );
});
