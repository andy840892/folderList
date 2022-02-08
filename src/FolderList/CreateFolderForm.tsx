import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogType } from "./Constrant/DialogType";

 

type Inputs = {
  example: string,
  exampleRequired: string,
};

interface Props { 
    open: boolean;
    setOpen: (open: boolean, name: keyof typeof DialogType) => void; 
    name: keyof typeof DialogType;
    onDialogCloseFunc?: () => void; 
}

const CreateFolderForm = ({
  open,
  setOpen,
  name, 
}:Props) => { 
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div>
   
      <Dialog open={open}  onClose={() => setOpen(false, name)}>
        <DialogTitle>New Folder</DialogTitle>
        <DialogContent>
          
           <form onSubmit={handleSubmit(onSubmit)}> 
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} placeholder="Name"/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{}}>save</Button> 
        </DialogActions>
      </Dialog>
    </div>
  );
}  

export default CreateFolderForm;