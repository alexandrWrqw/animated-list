interface IItem {
  count: number,
  color: string,
  width: number,
};

type ItemProps = Omit<IItem, 'count'>; 

export type { IItem, ItemProps };