import { AnyAction } from 'redux';

import {
  GET_RANDOM_IMAGE,
  GET_RANDOM_IMAGE_SUCCESS,
  GET_RANDOM_IMAGE_FAILURE,
  SET_IMAGE_INFO,
} from '../../actions/image';
import { IImageInfo, IImageInfoData } from '../../../interfaces/image';

export function imageInfoReducer(
  imageInfo: IImageInfo,
  action: AnyAction,
): IImageInfo {
  switch (action.type) {
    case GET_RANDOM_IMAGE:
      return {
        ...imageInfo,
        isFetching: true,
      };
    case GET_RANDOM_IMAGE_SUCCESS: {
      const data: IImageInfoData | null = action.payload || null;

      return {
        data,
        error: false,
        isFetching: false,
      };
    }
    case GET_RANDOM_IMAGE_FAILURE:
      return {
        ...imageInfo,
        error: true,
        isFetching: false,
      };
    case SET_IMAGE_INFO: {
      const data: IImageInfoData | null = action.image || null;

      return {
        data,
        error: false,
        isFetching: false,
      };
    }
    default:
      return imageInfo
  }
}
