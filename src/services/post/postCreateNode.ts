/**
 * Creates a new node by making a POST request to the specified URL.
 *
 * @param {postCreateNodeParams} payload - The payload containing the data for the new node.
 * @return {Promise<any>} A promise that resolves with the response from the server.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { URL_NODE } from '../variablesGlobal';

interface postCreateNodeParams {
  payload: {
    parent: number;
    locales: string[];
  };
}

export const postCreateNode = ({ payload }: postCreateNodeParams) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${URL_NODE}`, payload)
      .then((resp: any) => {
        resolve(resp);
      })
      .catch((error) => reject(error));
  });
