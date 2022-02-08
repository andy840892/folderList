import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogType } from "./Constrant/DialogType";
import { FolderFile } from "./Model/FolderFile";

type Inputs = {
  name: string;
};

interface Props {
  open: boolean;
  currentFolder?: FolderFile;
  setOpen: (open: boolean, name: keyof typeof DialogType) => void;
  dialogName: keyof typeof DialogType;
  onDialogCloseFunc?: () => void;
  submitFileFolder: (folderFile: FolderFile) => void;
}

const CreateFolderForm = ({
  open,
  setOpen,
  dialogName,
  currentFolder,
  submitFileFolder,
}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("form data", data);
    const newFolder: FolderFile = {
      name: data.name,
      id: Math.random().toString(),
      parentId: currentFolder?.id,
      type: "Folder",
    };

    submitFileFolder(newFolder);
    setOpen(false, dialogName);
  };

  // console.log(watch("name")); // watch input value by passing the name of it

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false, dialogName)}>
        <DialogTitle>New Folder</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("name", { required: true })}
              placeholder="Name"
            />
            {/* errors will return when field validation fails  */}
            {errors.name && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </DialogContent>
        <DialogActions>
          {/* <Button
            onClick={() => {
              submitFileFolder(newFolder);
              setOpen(false, name);
            }}
          >
            save
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateFolderForm;
