import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { Record } from 'immutable';

import { IStore } from '../../store/IStore';
import { removeDownloadHistoryItem as removeDownloadHistoryItemAction } from '../../store/actions/history';
import { downloadHistoryItemsSelector } from '../../store/selectors/downloadHistory';
import { IDownloadHistoryItem } from '../../interfaces/history';
import { HistoryImage } from '../HistoryImage';
import { saveDownloadHistoryItems } from '../../utils/downloadHistory';

import * as style from './index.module.css';

export interface IImageDownloadHistoryProps {}

export interface IImageDownloadHistoryStateToProps {
  items: IDownloadHistoryItem[] | null;
}

export interface IImageDownloadHistoryDispatchToProps {
  removeDownloadHistoryItem(itemId: string): AnyAction;
}

export type TImageDownloadHistoryProps = IImageDownloadHistoryProps & IImageDownloadHistoryStateToProps & IImageDownloadHistoryDispatchToProps;

export class ImageDownloadHistory extends React.Component<TImageDownloadHistoryProps> {
  public constructor(props: TImageDownloadHistoryProps) {
    super(props);

    this.removeImage = this.removeImage.bind(this);
  }

  public componentDidUpdate(prevProps: TImageDownloadHistoryProps): void {
    const { items } = this.props;

    if (items !== prevProps.items) {
      saveDownloadHistoryItems(items);
    }
  }

  private removeImage(itemId: string): void {
    const {
      removeDownloadHistoryItem,
    } = this.props;

    removeDownloadHistoryItem(itemId);
  }

  public render() {
    const { items } = this.props;

    return (
      <div className={style.container}>
        {items && items.length ? (
          <ul className={style.list}>
            {items.map((item) => (
              <li
                className={style.item}
                key={item.id}
              >
                <HistoryImage
                  image={item}
                  removeCallback={this.removeImage}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={style.info}>
            У вас пока нет истории загрузок
          </p>
        )}
      </div>
    );
  }
}

export const ImageDownloadHistoryContainer = connect<
  IImageDownloadHistoryStateToProps,
  IImageDownloadHistoryDispatchToProps,
  {},
  Record<IStore>
>(
  (state: Record<IStore>) => ({
    items: downloadHistoryItemsSelector(state),
  }),
  {
    removeDownloadHistoryItem: removeDownloadHistoryItemAction,
  },
)(ImageDownloadHistory);
