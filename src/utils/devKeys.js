// import { DEV_API_KEY } from "@env";
import store from "../redux/store";

const DEV_API_KEY = process.env.REACT_APP_DEV_API_KEY;

export const API_KEY = DEV_API_KEY;

export const audioFile = store.getState()?.user?.audioFile;
