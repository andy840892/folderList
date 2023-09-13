import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { FolderFile } from "./Model/FolderFile";
import { useEffect } from "react";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

interface Prop {
  currentFolder?: FolderFile;
  list: FolderFile[];
}

const BasicBreadcrumbs = ({ list, currentFolder }: Prop) => {
  // const getBreadlist = (list: FolderFile[], currentFolder?: FolderFile) => {
  //   return [];
  // };

  const [breadlist, setBreadlist] = React.useState([currentFolder?.name]);

  const result = [currentFolder?.name];
  const getBreadlist = (
    folderList: FolderFile[],
    currentFolder?: FolderFile
  ) => {
    if (currentFolder?.parentId) {
      result.push(
        folderList.find((x) => x.id === currentFolder?.parentId)?.name
      );
      getBreadlist(
        folderList,
        folderList.find((x) => x.id === currentFolder?.parentId)
      );
    } else {
      setBreadlist(result);
    }
  };

  console.log("^^^^^^^^", result);
  console.log("1", result);

  useEffect(() => {
    getBreadlist(list, currentFolder);
  }, [currentFolder]);

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadlist?.map((x) => (
          <Link key={x ?? ""} underline="hover" color="inherit" href="/">
            {x}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BasicBreadcrumbs;
