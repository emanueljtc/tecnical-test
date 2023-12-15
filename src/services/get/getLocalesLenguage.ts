/**
 * Retrieves the parents of a node by making an HTTP GET request to the GET_NODE_PARENTS endpoint.
 *
 * @return {Promise<any>} A promise that resolves with the response from the GET request, or rejects with an error.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { GET_LOCALES_LENGUAGE } from '../variablesGlobal';

export const getLocalesLenguage = () =>
  new Promise((resolve, reject) => {
    axios
      .get(GET_LOCALES_LENGUAGE)
      .then((resp: any) => {
        resolve(resp);
      })
      .catch((error) => reject(error));
  });
