import { IImageInfoData } from "../../../interfaces/image";

export const ADD_DOWNLOAD_HISTORY_ITEM = 'ADD_DOWNLOAD_HISTORY_ITEM';
export const REMOVE_DOWNLOAD_HISTORY_ITEM = 'REMOVE_DOWNLOAD_HISTORY_ITEM';

export function addDownloadHistoryItem(image: IImageInfoData) {
  return {
    type: ADD_DOWNLOAD_HISTORY_ITEM,
    image,
  };
}

export function removeDownloadHistoryItem(itemId: string) {
  return {
    type: REMOVE_DOWNLOAD_HISTORY_ITEM,
    itemId,
  };
}
