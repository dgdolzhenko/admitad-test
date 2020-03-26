import * as React from 'react';

import { IDownloadHistoryItem } from '../../interfaces/history';

import * as style from './index.module.css';

import loaderImage from './assets/loader.svg';

const moment = require('moment');
moment.locale('ru');

export interface IHistoryImageProps {
  image: IDownloadHistoryItem;
  removeCallback(imageId: string): void;
}

export interface IHistoryImageState {
  isImageLoaded: boolean;
}

export class HistoryImage extends React.Component<IHistoryImageProps, IHistoryImageState> {
  public constructor(props: IHistoryImageProps) {
    super(props);

    this.state = {
      isImageLoaded: false,
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  private handleImageLoaded(): void {
    this.setState({
      isImageLoaded: true,
    });
  }

  public render() {
    const {
      image,
      removeCallback,
    } = this.props;
    const { isImageLoaded } = this.state;

    const hasImage = Boolean(image.smallSizeUrl || image.originalSizeUrl);
    const imageWrapperClassNames = [style.imageWrapper];
    const imageClassNames = [style.image];
    
    if (!isImageLoaded) {
      imageWrapperClassNames.push(style.imageWrapperEmpty);
      imageClassNames.push(style.imageHidden);
    }

    return (
      <article className={style.container}>
        <aside className={imageWrapperClassNames.join(' ')}>
          {!isImageLoaded ? (
            <img
              src={loaderImage}
              className={style.loader}
              alt=""
            />
          ) : null}
          {hasImage ? (
            <img
              src={image.smallSizeUrl || image.originalSizeUrl}
              alt=""
              className={imageClassNames.join(' ')}
              onLoad={this.handleImageLoaded}
            />
          ) : null}
          <button
            type="button"
            className={style.button}
            onClick={() => removeCallback(image.id)}
          >
            <svg
              className={style.buttonIcon}
              viewBox="0 0 384 384"
              width="18px"
              height="18px"
            >
              <path d="M64 341.33A42.65 42.65 0 00106.67 384h170.66A42.65 42.65 0 00320 341.33v-256H64v256zM266.67 21.33L245.33 0H138.67l-21.34 21.33H42.67V64h298.66V21.33z"/>
            </svg>
          </button>
        </aside>
        <section className={style.content}>
          <h2 className={style.title}>
            {image.title || 'Нет названия'}
          </h2>
          <p className={style.info}>
            {moment(image.downloadDate).format('YYYY-MM-DD HH:mm:ss')}
          </p>
        </section>
      </article>
    );
  }
}
