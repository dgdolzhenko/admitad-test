import { Record } from 'immutable';
import { createSelector } from 'reselect'

import { IStore } from '../IStore';
import { IDownloadHistory } from '../../interfaces/history';

export const downloadHistorySelector = (state: Record<IStore>) => state.get('downloadHistory');

export const downloadHistoryItemsSelector = createSelector(
  downloadHistorySelector,
  (imageInfo: IDownloadHistory) => imageInfo.items,
);
