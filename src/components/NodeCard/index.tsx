import { INodeCardProps } from './interface';

const NodeCard = ({ node, changeNodeSelected }: INodeCardProps) => {
  const { id, title } = node;
  return (
    <div
      key={id}
      className="w-52 h-52 bg-white rounded-full p-4 flex items-center justify-center"
    >
      <a
        className="text-3xl font-bold uppercase cursor-pointer hover:text-purple-400"
        onClick={() => changeNodeSelected(Number(id))}
      >
        {title}
      </a>
    </div>
  );
};

export default NodeCard;
