import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Typography } from "@material-ui/core";

 
interface Props { 
    name: string;
    type:"Folder"|"File"
}

const FolderFileItem = ({ 
  name, 
  type
}:Props) => {  
 

  return (
    <div>

      {type==="Folder"
        ?   <FolderOpenIcon />
        : <FileOpenIcon />
      }  
    <Typography variant="h6"  >
             {name}
        </Typography>
    </div>
  );
}  

export default FolderFileItem;