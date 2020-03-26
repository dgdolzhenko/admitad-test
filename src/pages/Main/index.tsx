import * as React from 'react';

import { PageWrapper } from '../../components/PageWrapper';
import { DynamicImageContainer } from '../../components/DynamicImage';

import * as style from './index.module.css';

/**
 * Главная страница
 */
export interface IMainProps {}

export class Main extends React.Component<IMainProps> {
  public render() {
    return (
      <PageWrapper
        title="Главная"
      >
        <section className={style.container}>
          <DynamicImageContainer />
        </section>
      </PageWrapper>
    );
  }
}
