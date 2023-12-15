/**
 * Retrieves the child nodes for a given ID.
 *
 * @param {object} props - The properties object.
 * @param {number} props.id - The ID of the node to retrieve the child nodes for.
 * @return {Promise<unknown>} A Promise that resolves with the response data.
 */
import axios from 'axios';
import { GET_CHILDS_NODE } from '../variablesGlobal';

export const getChildsNode = (props: { id: number }) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${GET_CHILDS_NODE}${props.id}`)
      .then((resp: unknown) => {
        resolve(resp);
      })
      .catch((error) => reject(error));
  });
