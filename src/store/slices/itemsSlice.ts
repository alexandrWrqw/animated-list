import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { IItem } from '../../interfaces/Item.interface';

const initialState: IItem[] = [];

const itemsSlice = createSlice({
  name: 'items',

  initialState,

  reducers: {
    itemAdded(state, action: PayloadAction<IItem>) {
      state.unshift(action.payload);
    },
    
    itemDeleted(state) {
      state.pop();
    },
  },
});

export const { itemAdded, itemDeleted } = itemsSlice.actions;
export const items = (state: RootState) => state.items;

export default itemsSlice.reducer;