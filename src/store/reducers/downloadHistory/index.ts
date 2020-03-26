import { AnyAction } from 'redux';

import {
  ADD_DOWNLOAD_HISTORY_ITEM,
  REMOVE_DOWNLOAD_HISTORY_ITEM
} from '../../actions/history';
import { IDownloadHistory, IDownloadHistoryItem } from '../../../interfaces/history';
import { IImageInfoData } from '../../../interfaces/image';

export function downloadHistoryReducer(
  downloadHistory: IDownloadHistory,
  action: AnyAction,
): IDownloadHistory {
  switch (action.type) {
    case ADD_DOWNLOAD_HISTORY_ITEM: {
      const image: IImageInfoData = action.image;
      const historyItems = downloadHistory.items || [];
      const items: IDownloadHistoryItem[] = [
        ...historyItems,
        {
          ...image,
          downloadDate: new Date(),
        },
      ];

      return {
        ...downloadHistory,
        items,
      };
    }
    case REMOVE_DOWNLOAD_HISTORY_ITEM: {
      const itemId: string = action.itemId;
      const historyItems = downloadHistory.items || [];
      const items = historyItems.filter((item) => item.id !== itemId);

      return {
        ...downloadHistory,
        items: items.length
          ? items
          : null,
      };
    }
    default:
      return downloadHistory
  }
}
