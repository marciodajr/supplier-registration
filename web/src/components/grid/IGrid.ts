interface IItems {
  // [k: string]: boolean | number | string;
  [k: string]: string;
}

export interface IGrid {
  items: IItems[];
  itemsKeys: string[];
  columID: string;
  columTitle: string[];
  onAdd: () => void;
  onEdit: (key: number) => void;
  onRead: (key: number) => void;
  onRemove: (columID: string) => void;
}
