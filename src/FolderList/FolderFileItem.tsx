import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    folder: {
      width: "7rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

interface Props {
  name: string;
  type: "Folder" | "File";
}

const FolderFileItem = ({ name, type }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.folder}>
      {type === "Folder" ? (
        <FolderOpenIcon
          onDoubleClick={() => {
            alert("das");
          }}
        />
      ) : (
        <FileOpenIcon />
      )}
      <Typography variant="h6">{name}</Typography>
    </div>
  );
};

export default FolderFileItem;
