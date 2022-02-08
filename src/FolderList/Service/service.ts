import { FolderFile } from "../Model/FolderFile";

const mokeData :FolderFile[]=[
    {
        name:"Folder1",
        id:"12312312",
        type:"Folder"
    },
    {
        name:"Folder2",
        id:"12312312",
        type:"Folder"
    },
    {
        name:"TextFile",
        id:"12312312",
        type:"Folder"
    }, 
    
]

export const getDirectoryList = async () => {
  return mokeData;
};
