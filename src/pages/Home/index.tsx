/**
 * Initializes the Home component.
 *
 * @return {void}
 */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import {
  deleteNodeServices,
  getChildsNode,
  getNodeParents,
  getSearchNode,
  postCreateNode,
} from '../../services';
import { TNode } from './types';
import NodeCard from 'components/NodeCard';
import { handleErrorToast, handleSuccessToast } from '../../utils/tostifty';
import { SwitchLenguage } from 'components/UIElements';

const Home = () => {
  const [dataNodeParents, setDataNodeParents] = useState<TNode[]>([]);
  const [nodeSelected, setNodeSelected] = useState<number>(0);
  const [showButtonOrigin, setShowButtonOrigin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGetNodeParents = async () => {
    /**
     * Handles getting the parent nodes.
     *
     * @return {Promise<void>} - A promise that resolves when the parent nodes have been retrieved.
     */
    try {
      const { data }: any = await getNodeParents();
      setDataNodeParents(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleGetChildsNode = async () => {
    /**
     * Handles getting the child nodes.
     *
     * @return {Promise<void>} - Promise that resolves when the child nodes are retrieved successfully.
     */
    setShowButtonOrigin(true);
    try {
      const response: any = await getChildsNode({ id: nodeSelected });
      setDataNodeParents(response.data);
      setNodeSelected(0);
    } catch (error: any) {
      if (error) {
        const { message } = error.response?.data;
        handleErrorToast(message);
        setNodeSelected(0);
      }
    }
  };

  const goToParent = async (idParent: number) => {
    /**
     * Retrieves the parent node of the given ID and updates the data accordingly.
     *
     * @param {number} idParent - The ID of the parent node.
     * @return {void}
     */
    try {
      setIsLoading(true);

      const response: any = await getSearchNode({ id: idParent });
      const arrData = [];
      arrData.push(response.data);
      setDataNodeParents(arrData);
    } catch (error: any) {
      if (error) {
        setIsLoading(false);
        const { message } = error.response?.data;
        handleErrorToast(message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const deleteNode = async (idParent: number) => {
    /**
     * Deletes a node with the given parent ID.
     *
     * @param {number} idParent - The ID of the parent node.
     * @return {Promise<void>} - A Promise that resolves when the node is deleted.
     */
    try {
      setIsLoading(true);
      const response: any = await deleteNodeServices({ id: idParent });
      if (response.status === 200) {
        handleSuccessToast('Node deleted successfully');
        const filterData = dataNodeParents.filter(
          (item: TNode) => item.id !== idParent
        );
        console.log(filterData);
        setDataNodeParents(filterData);
      }
    } catch (error: any) {
      if (error) {
        setIsLoading(false);
        if (error.response.status !== 404) {
          const { message } = error.response?.data;
          handleErrorToast(message);
        } else {
          handleErrorToast('Error 404 - Node not found');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const createNode = async (idParent: number) => {
    /**
     * Creates a node with the specified parent ID.
     *
     * @param {number} idParent - The ID of the parent node.
     * @return {Promise<void>} - Returns a promise that resolves when the node is created successfully.
     */
    try {
      setIsLoading(true);
      await postCreateNode({
        payload: { parent: idParent, locales: ['es_ES'] },
      });
      handleSuccessToast('Node created successfully');
    } catch (error: any) {
      if (error) {
        if (error.response.status !== 404) {
          const { message } = error.response?.data;
          handleErrorToast(message);
        } else {
          handleErrorToast('Error 404 - Node not found');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (nodeSelected !== 0) {
      handleGetChildsNode();
    }
  }, [nodeSelected]);

  useMemo(() => {
    handleGetNodeParents();
  }, []);

  return (
    <main>
      <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h3 className="text-2xl sm:text-4xl leading-none font-bold tracking-tight text-purple-200">
          <span className="text-[gold] opacity-75">Prueba</span> Tecnica
        </h3>
        <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-purple-400">
          Los Nodos
        </h1>
        <p className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium mb-10 sm:mb-11">
          Un nodo es uno de los elementos de una lista enlazada, de un árbol o
          de un grafo. Cada nodo será una estructura o registro que dispondrá de
          varios campos, y al menos uno de esos campos será un puntero o
          referencia a otro nodo, de forma que, conocido un nodo, a partir de
          esa referencia, será posible en teoría tener acceso a otros nodos de
          la estructura. Los nodos son herramientas esenciales para uno de los
          procesadores que lo componen.
        </p>
        <div className="absolute top-12 right-12 opacity-0 lg:opacity-100">
          <CodeBracketSquareIcon width={200} height={200} color="#800080" />
        </div>
      </header>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col gap-4">
        {showButtonOrigin && (
          <button
            onClick={handleGetNodeParents}
            className="w-1/4 p-4 bg-purple-400 rounded-md text-2xl font-bold hover:text-white uppercase"
          >
            Ir al origen
          </button>
        )}
        <SwitchLenguage
          dataNodeParents={dataNodeParents}
          setDataNodeParents={setDataNodeParents}
        />
      </section>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div
          className="
            flex 
            flex-col 
            sm:flex-row 
            justify-center 
            sm:justify-between 
            items-center 
            flex-wrap
            gap-4"
        >
          {dataNodeParents.map((parent, index) => (
            <NodeCard
              node={parent}
              changeNodeSelected={setNodeSelected}
              nodeSelected={Number(nodeSelected)}
              goToParent={goToParent}
              key={index}
              deleteNode={deleteNode}
              createNode={createNode}
              isLoading={isLoading}
            />
          ))}
        </div>
      </section>

      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
        <a href="http://emanueljtc.github.io/" target="_blank" rel="noreferrer">
          Ing. Emanuel Torres @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
};

export default Home;

