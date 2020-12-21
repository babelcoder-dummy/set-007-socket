import { Store } from 'redux';
import * as reduxToolkit from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk'

import type { RootState } from 'modules/reducers';
import rootReducer from 'modules/reducers';

const configureStore = (initialState?: RootState): Store<RootState> => {
  return reduxToolkit.configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: [ReduxThunk]
  });
};

export default configureStore
