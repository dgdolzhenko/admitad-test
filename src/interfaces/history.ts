import { IImageInfoData } from './image';

export interface IDownloadHistoryItem extends IImageInfoData {
  downloadDate: Date;
}

export interface IDownloadHistory {
  items: IDownloadHistoryItem[] | null,
}
