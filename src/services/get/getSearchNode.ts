import axios from 'axios';
import { URL_NODE } from '../variablesGlobal';

export const getSearchNode = (props: { id: number; locale?: string }) =>
  new Promise((resolve, reject) => {
    axios
      .get(
        `${URL_NODE}${props.id}?locale=${
          !!props.locale ? props.locale : 'en_US'
        }`
      )
      .then((resp: unknown) => {
        resolve(resp);
      })
      .catch((error) => reject(error));
  });
