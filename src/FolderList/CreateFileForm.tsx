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
  content: string;
};

interface Props {
  open: boolean;
  setOpen: (open: boolean, name: keyof typeof DialogType) => void;
  dialogName: keyof typeof DialogType;
  onDialogCloseFunc?: () => void;
  submitFileFolder: (folderFile: FolderFile) => void;
  currentFolder?: FolderFile;
}

const CreateFileForm = ({
  open,
  setOpen,
  dialogName,
  submitFileFolder,
  currentFolder,
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
      type: "File",
    };

    submitFileFolder(newFolder);
    setOpen(false, dialogName);
  };

  // console.log(watch("name")); // watch input value by passing the name of it

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false, dialogName)}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("name")} placeholder="Name" />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("content", { required: true })}
              placeholder="File content"
            />
            {/* errors will return when field validation fails  */}
            {errors.content && <span>This field is required</span>}
            <Button type="submit">save</Button>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateFileForm;
