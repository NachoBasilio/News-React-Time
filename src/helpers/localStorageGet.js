import { useDispatch } from "react-redux"
import { setNoticiasEnElStorage } from "../store/noticias/noticiasSlice";

export const localStorageGet = (key) => {
    const dispatch = useDispatch()

    const localStorageData = localStorage.getItem(key)
    if (localStorageData === null) {
        return []; 
    }
    const parsedData = JSON.parse(localStorageData);
    dispatch(setNoticiasEnElStorage(parsedData));
    return parsedData; 
}
