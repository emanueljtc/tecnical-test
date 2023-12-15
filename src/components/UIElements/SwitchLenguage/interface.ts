import { TNode } from '../../../pages/Home/types';

export interface ISwitchLenguageProps {
  dataNodeParents: TNode[];
  setDataNodeParents: React.Dispatch<React.SetStateAction<TNode[]>>;
}

export interface ILocale {
  locale: string;
  label: string;
}

export interface ILocaleTransformed extends ILocale {
  flagUrl: string;
}
