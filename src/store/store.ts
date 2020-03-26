import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux-immutable';
import { Record } from "immutable";

import { imageInfoReducer } from './reducers/imageInfo';
import { downloadHistoryReducer } from './reducers/downloadHistory';
import { IImageInfo } from '../interfaces/image';
import { IDownloadHistory } from '../interfaces/history';
import { IStore } from './IStore';
import { getDownloadHistoryItems } from '../utils/downloadHistory';

export const DEFAULT_IMAGE_INFO: IImageInfo = {
  data: null,
  error: false,
  isFetching: false,
};

export const DEFAULT_DOWNLOAD_HISTORY: IDownloadHistory = {
  items: getDownloadHistoryItems(),
};

export const configureStore = () => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  
  const StoreRecord = Record({
    imageInfo: DEFAULT_IMAGE_INFO,
    downloadHistory: DEFAULT_DOWNLOAD_HISTORY,
  } as IStore)
  const initialState = StoreRecord({});
  
  const rootReducer = combineReducers<{}>({
    imageInfo: imageInfoReducer,
    downloadHistory: downloadHistoryReducer,
  });

  return {
    ...createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(sagaMiddleware),
      ),
    ),
    runSaga: sagaMiddleware.run,
  };
};
