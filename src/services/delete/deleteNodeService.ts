/**
 * Deletes a node service by its ID.
 *
 * @param {Object} params - The parameters for deleting a node service.
 * @param {number} params.id - The ID of the node service to be deleted.
 * @returns {Promise<any>} A promise that resolves with the response data if the deletion is successful, or rejects with the error if an error occurs.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { URL_NODE } from '../variablesGlobal';

export const deleteNodeServices = ({ id }: { id: number }) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${URL_NODE}${id}`)
      .then((resp: any) => {
        resolve(resp);
      })
      .catch((error) => reject(error));
  });
