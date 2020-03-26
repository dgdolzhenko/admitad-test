import { IDownloadHistoryItem } from "../interfaces/history";

export const DOWNLOAD_HISTORY_STORAGE_KEY = 'downloadHistoryStorage';

export function saveDownloadHistoryItems(items: IDownloadHistoryItem[] | null): void {
  if (!items) {
    window.localStorage.removeItem(DOWNLOAD_HISTORY_STORAGE_KEY);

    return;
  }

  window.localStorage.setItem(DOWNLOAD_HISTORY_STORAGE_KEY, JSON.stringify(items));
}

export function getDownloadHistoryItems(): IDownloadHistoryItem[] | null {
  const items = window.localStorage.getItem(DOWNLOAD_HISTORY_STORAGE_KEY);

  if (!items) {
    return null;
  }

  try {
    const parsedItems = JSON.parse(items);

    return parsedItems;
  } catch (error) {
    return null;
  }
}
