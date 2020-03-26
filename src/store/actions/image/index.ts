import { IImageInfoData } from "../../../interfaces/image";

export const GET_RANDOM_IMAGE = 'GET_RANDOM_IMAGE';
export const GET_RANDOM_IMAGE_SUCCESS = 'GET_RANDOM_IMAGE_SUCCESS';
export const GET_RANDOM_IMAGE_FAILURE = 'GET_RANDOM_IMAGE_FAILURE';

export const SET_IMAGE_INFO = 'SET_IMAGE_INFO';

export function getRandomImage() {
  return {
    type: GET_RANDOM_IMAGE,
  };
}

export function setImageInfo(image: IImageInfoData | null) {
  return {
    type: SET_IMAGE_INFO,
    image,
  };
}
