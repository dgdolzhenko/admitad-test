import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { Record } from "immutable";
import { saveAs } from 'file-saver';

import { IStore } from '../../store/IStore';
import {
  getRandomImage as getRandomImageAction,
  setImageInfo as setImageInfoAction,
} from '../../store/actions/image';
import { addDownloadHistoryItem as addDownloadHistoryItemAction } from '../../store/actions/history';
import { imageDataSelector, imageErrorSelector, imageFetchingSelector } from '../../store/selectors/imageInfo';
import { downloadHistoryItemsSelector } from '../../store/selectors/downloadHistory';
import { IImageInfoData } from '../../interfaces/image';
import { IDownloadHistoryItem } from '../../interfaces/history';
import { ErrorHandler } from '../ErrorHandler';
import { Button } from '../Button';
import { saveDownloadHistoryItems } from '../../utils/downloadHistory';

import * as style from './index.module.css';

import loaderImage from './assets/loader.svg';

export interface IDynamicImageProps {}

export interface IDynamicImageStateToProps {
  image: IImageInfoData | null;
  error: boolean;
  isFetching: boolean;
  historyItems: IDownloadHistoryItem[] | null;
}

export interface IDynamicImageDispatchToProps {
  getRandomImage(): AnyAction;
  setImageInfo(image: IImageInfoData | null): AnyAction;
  addDownloadHistoryItem(image: IImageInfoData): AnyAction;
}

export interface IDynamicImageState {
  isImageLoaded: boolean;
}

export type TDynamicImageProps = IDynamicImageProps & IDynamicImageStateToProps & IDynamicImageDispatchToProps;

export class DynamicImage extends React.Component<TDynamicImageProps, IDynamicImageState> {
  public constructor(props: TDynamicImageProps) {
    super(props);

    this.state = {
      isImageLoaded: false,
    };

    this.downloadImage = this.downloadImage.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  public componentDidMount(): void {
    const { getRandomImage } = this.props;

    getRandomImage();
  }

  public componentDidUpdate(prevProps: TDynamicImageProps): void {
    const { historyItems } = this.props;

    if (historyItems !== prevProps.historyItems) {
      saveDownloadHistoryItems(historyItems);
    }
  }

  public componentWillUnmount(): void {
    const { setImageInfo } = this.props;

    setImageInfo(null);
  }

  private downloadImage(): void {
    const {
      image,
      addDownloadHistoryItem,
      getRandomImage,
    } = this.props;

    if (image && image.originalSizeUrl) {
      saveAs(image.originalSizeUrl, image.title);
      addDownloadHistoryItem(image)
    }

    getRandomImage();

    this.setState({
      isImageLoaded: false,
    });
  }

  private handleImageLoaded(): void {
    this.setState({
      isImageLoaded: true,
    });
  }

  public render() {
    const {
      image,
      error,
      isFetching,
    } = this.props;
    const { isImageLoaded } = this.state;

    const hasImage = Boolean(
      image
      && image.originalSizeUrl
      && !isFetching
    );
    const url = hasImage
      ? (image as IImageInfoData).originalSizeUrl
      : '';
    const isLoading = isFetching || !isImageLoaded;

    let loader = null;
    const imageWrapperClassNames = [style.imageWrapper];
    const imageClassNames = [style.image];

    if (isLoading) {
      imageWrapperClassNames.push(style.imageWrapperEmpty);
      imageClassNames.push(style.imageHidden);
      loader = (
        <img
          src={loaderImage}
          className={style.loader}
          alt=""
        />
      );
    }

    return (
      <div className={style.container}>
        <ErrorHandler
          hasError={error}
        >
          <div className={imageWrapperClassNames.join(' ')}>
            {loader}
            {hasImage ? (
              <img
                src={url}
                alt="Динамическая картинка"
                className={imageClassNames.join(' ')}
                onLoad={this.handleImageLoaded}
              />
            ) : null}
          </div>
          <Button
            text="Загрузить"
            callback={this.downloadImage}
            isDisabled={!hasImage}
          />
        </ErrorHandler>
      </div>
    );
  }
}

export const DynamicImageContainer = connect<
  IDynamicImageStateToProps,
  IDynamicImageDispatchToProps,
  {},
  Record<IStore>
>(
  (state: Record<IStore>) => ({
    image: imageDataSelector(state),
    error: imageErrorSelector(state),
    isFetching: imageFetchingSelector(state),
    historyItems: downloadHistoryItemsSelector(state),
  }),
  {
    getRandomImage: getRandomImageAction,
    addDownloadHistoryItem: addDownloadHistoryItemAction,
    setImageInfo: setImageInfoAction,
  },
)(DynamicImage);
