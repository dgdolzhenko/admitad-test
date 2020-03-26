import { IImageInfo } from '../interfaces/image';
import { IDownloadHistory } from '../interfaces/history';

export interface IStore {
  imageInfo: IImageInfo;
  downloadHistory: IDownloadHistory;
}
