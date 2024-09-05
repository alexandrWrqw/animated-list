import { FC } from 'react';

import { Actions } from '../Actions/Actions';
import { List } from '../List/List';

import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <Actions />
      <List />
    </div>
  );
};

export { App };
