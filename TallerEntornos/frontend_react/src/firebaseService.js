import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from './firebase';

const uploadFile = async (file) => {
  const storageRef = ref(storage, `documents/${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export { uploadFile };
