import { Record } from 'immutable';
import { createSelector } from 'reselect'

import { IStore } from '../IStore';
import { IImageInfo } from '../../interfaces/image';

export const imageInfoSelector = (state: Record<IStore>) => state.get('imageInfo');

export const imageDataSelector = createSelector(
  imageInfoSelector,
  (imageInfo: IImageInfo) => imageInfo.data,
);

export const imageErrorSelector = createSelector(
  imageInfoSelector,
  (imageInfo: IImageInfo) => imageInfo.error,
);

export const imageFetchingSelector = createSelector(
  imageInfoSelector,
  (imageInfo: IImageInfo) => imageInfo.isFetching,
);
