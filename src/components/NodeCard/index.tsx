/**
 * Renders a node card component.
 *
 * @param {INodeCardProps} node - The node object to be rendered.
 * @param {function} changeNodeSelected - The function to change the selected node.
 * @param {number} nodeSelected - The ID of the selected node.
 * @param {function} goToParent - The function to navigate to the parent node.
 * @param {function} deleteNode - The function to delete the node.
 * @param {function} createNode - The function to create a new node.
 * @param {boolean} isLoading - Flag indicating if data is loading.
 * @return {JSX.Element} The rendered node card component.
 */
import {
  ArrowSmallLeftIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { INodeCardProps } from './interface';
import { Button } from 'components/UIElements';

const NodeCard = ({
  node,
  changeNodeSelected,
  nodeSelected,
  goToParent = () => {},
  deleteNode,
  createNode,
  isLoading = false,
}: INodeCardProps) => {
  const { id, title, parent } = node;
  return (
    <div
      key={nodeSelected}
      className={` bg-white rounded-full p-4 flex items-center justify-center flex-col ${
        title.length > 5 ? 'w-80 h-80' : 'w-52 h-52'
      } `}
    >
      <a
        className="text-3xl text-center font-bold uppercase cursor-pointer hover:text-purple-400"
        onClick={() => changeNodeSelected(Number(id))}
      >
        {title}
      </a>
      <div className="w-full flex justify-evenly items-center">
        <Button onClick={() => createNode(id)} isLoading={isLoading}>
          <PlusIcon width={20} height={20} color="white" />
        </Button>
        {parent && (
          <Button
            onClick={() => goToParent(Number(parent))}
            buttonClassNames={`p-2 bg-slate-400 rounded-md mt-2 hover:bg-purple-400 ${
              isLoading
                ? 'cursor-not-allowed hover:bg-gray-400'
                : 'cursor-pointer'
            }`}
          >
            <ArrowSmallLeftIcon width={20} height={20} color="#800080" />
          </Button>
        )}
        {parent && (
          <>
            <Button
              onClick={() => deleteNode(id)}
              isLoading={isLoading}
              buttonClassNames={`p-2 bg-red-400 rounded-md mt-2 hover:bg-purple-400 ${
                isLoading
                  ? 'cursor-not-allowed hover:bg-gray-400'
                  : 'cursor-pointer'
              }`}
            >
              <TrashIcon width={20} height={20} color="white" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default NodeCard;
