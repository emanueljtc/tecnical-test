/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { GET_NODE_PARENTS, REACT_APP_API_URL_BASE } from "../variablesGlobal";

const BASE_URL = `${REACT_APP_API_URL_BASE}${GET_NODE_PARENTS}`;
export const getNodeParents = () =>
  new Promise((resolve, reject) => {
    axios
      .get(BASE_URL)
      .then((resp: any) => {
        resolve(resp);
      })
      .catch((error) => reject(error));
  });
