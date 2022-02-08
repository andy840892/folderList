import { FolderFile } from "../Model/FolderFile";

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

export const getDirectoryList = async (parendid?: string) => {
  if (!parendid) return mokeData;
};
