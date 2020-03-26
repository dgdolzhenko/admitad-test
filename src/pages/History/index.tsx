import * as React from 'react';

import { ROUTES } from '../../routes';
import { PageWrapper } from '../../components/PageWrapper';
import { ImageDownloadHistoryContainer } from '../../components/ImageDownloadHistory';

import * as style from './index.module.css';

/**
 * Страница истории
 */
export interface IHistoryProps {}

export class History extends React.Component<IHistoryProps> {
  public render() {
    return (
      <PageWrapper
        title="История"
        backwardLink={ROUTES.MAIN_PAGE}
      >
        <section className={style.container}>
          <ImageDownloadHistoryContainer />
        </section>
      </PageWrapper>
    );
  }
}
