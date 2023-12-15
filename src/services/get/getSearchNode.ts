import axios from 'axios';
import { URL_NODE } from '../variablesGlobal';

export const getSearchNode = (props: { id: number }) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${URL_NODE}${props.id}`)
      .then((resp: unknown) => {
        resolve(resp);
      })
      .catch((error) => reject(error));
  });
