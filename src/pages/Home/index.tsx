/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import { useEffect, useMemo, useState } from 'react';
import { CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import { getNodeParents } from '../../services';
import { TNode } from './types';
import NodeCard from 'components/NodeCard';

const Home = () => {
  const [dataNodeParents, setDataNodeParents] = useState<TNode[]>([]);
  const [nodeSelected, setNodeSelected] = useState<number>(0);
  const handleGetNodeParents = async () => {
    try {
      const response: any = await getNodeParents();
      setDataNodeParents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(nodeSelected);
  }, [nodeSelected]);

  useMemo(() => handleGetNodeParents(), []);

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
          {dataNodeParents.map((parent) => (
            <NodeCard
              node={parent}
              changeNodeSelected={setNodeSelected}
              nodeSelected={nodeSelected}
            />
          ))}
        </div>
      </section>

      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
        <a href="https://github.com/jvidalv">
          Ing. Emanuel Torres @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
};

export default Home;

