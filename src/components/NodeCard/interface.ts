import { TNode } from '../../pages/Home/types';

export interface INodeCardProps {
  node: TNode;
  changeNodeSelected: React.Dispatch<React.SetStateAction<number>>;
  nodeSelected: number;
}
