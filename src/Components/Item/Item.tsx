import { FC } from 'react';

import { ItemProps } from '../../interfaces/Item.interface';

import styles from './Item.module.scss';

const Item: FC<ItemProps> = ({ color, width }) => {
  return (
    <li className={styles.item} style={{backgroundColor: color, width}} />
  );
};

export { Item };
