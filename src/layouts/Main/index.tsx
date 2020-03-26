import * as React from 'react';

import { IContentProps } from '../../content';
import { Header } from '../../components/Header';

import * as style from './index.module.css';

/**
 * Основной шаблон приложения
 */
export interface IMainProps extends IContentProps {}

export class Main extends React.Component<IMainProps>  {
  public render() {
    const {
      history,
      location,
      children,
    } = this.props;

    return (
      <div className={style.pageWrapper}>
        <header className={[style.header, style.layoutBlock].join(' ')}>
          <Header
            history={history}
            location={location}
          />
        </header>
        <main className={[style.main, style.layoutBlock].join(' ')}>
          {children}
        </main>
      </div>
    );
  }
}
