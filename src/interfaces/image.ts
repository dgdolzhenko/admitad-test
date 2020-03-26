export interface IImageInfoData {
  id: string;
  type?: string;
  title?: string;
  smallSizeUrl?: string;
  originalSizeUrl?: string;
}

export interface IImageInfo{
  data: IImageInfoData | null,
  error: boolean;
  isFetching: boolean;
}
