import { FC, useState } from "react";

import { itemAdded, itemDeleted } from "../../store/slices/itemsSlice";
import { useAppDispatch } from './../../hooks/reduxHooks';
import { getRandomColor } from './../../utils/getRandomColor';

import styles from './Actions.module.scss';

const Actions: FC = () => {
  const dispatch = useAppDispatch();

  const [count, setCount] = useState<number>(0);

  const handleAdd = (color: string) => {
    const width = window.innerWidth * 0.2;

    dispatch(itemAdded({ count, color, width }));
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.actions}>
      <button type="button" onClick={() => handleAdd(getRandomColor())}>Добавить</button>
      <button type="button" onClick={() => dispatch(itemDeleted())}>Удалить</button>
    </div>
  );
};

export { Actions };