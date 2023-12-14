import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const parents = [
    {
      id: 2,
      parent: null,
      title: "two",
      created_at: null,
      updated_at: null,
    },
    {
      id: 3,
      parent: null,
      title: "three",
      created_at: null,
      updated_at: null,
    },
    {
      id: 4,
      parent: null,
      title: "four",
      created_at: null,
      updated_at: null,
    },
    {
      id: 6,
      parent: null,
      title: "six",
      created_at: null,
      updated_at: null,
    },
    {
      id: 8,
      parent: null,
      title: "eight",
      created_at: null,
      updated_at: null,
    },
  ];
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
        <div className="flex">
          {parents.map((parent) => (
            <div
              key={parent.id}
              className="w-52 h-52 bg-white rounded-full p-4 flex items-center justify-center"
            >
              <p className="text-3xl font-bold uppercase">{parent.title}</p>
            </div>
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
