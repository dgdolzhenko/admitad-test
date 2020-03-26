import { IImageInfoData } from '../interfaces/image';

export function getRandomImageApi(): Promise<IImageInfoData> {
  return fetch('https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA')
    .then(response => response.json())
    .then(json => {
      const data = json.data;

      return {
        id: data.id,
        type: data.type || null,
        title: data.title || null,
        smallSizeUrl: data.fixed_width_downsampled_url || null,
        originalSizeUrl: data.image_original_url || null,
      };
    });
}
