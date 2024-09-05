import { FC } from 'react';
import { useTransition, animated } from '@react-spring/web';

import { Item } from '../Item/Item';
import { useAppSelector } from './../../hooks/reduxHooks';
import { IItem } from './../../interfaces/Item.interface';

import styles from './List.module.scss';

const List: FC = () => {
  const items = useAppSelector((state) => state.items);

  const transitions = useTransition(items.map((data) => ({ ...data, x: 0 })), {
    key: (item: IItem) => item.count,
    from: { width: 0, opacity: 0, translateX: 160, translateY: -70 },
    leave: ({ x }) => ({ x, width: 0, opacity: 0, translateX: 150 }),
    enter: ({ x, width }) => ({ x, width, opacity: 1, translateX: 0, translateY: 0 }),
  });

  return (
    <ul className={styles.list}>
      {transitions((style, item, _, index) => (
        <animated.div style={{ zIndex: items.length - index, ...style }}>
          <Item color={item.color} width={item.width}/>
        </animated.div>
      ))}
    </ul>
  );
};

export { List };