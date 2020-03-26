import * as React from 'react';

import { AsidePanel } from '../../components/AsidePanel';

import * as style from './index.module.css';

export interface IPageWrapperProps {
  title: string;
  backwardLink?: string;
}

export class PageWrapper extends React.Component<IPageWrapperProps> {
  public render() {
    const {
      title,
      backwardLink,
      children,
    } = this.props;
  
    return (
      <div className={style.container}>
        <aside className={style.asidePanel}>
          <AsidePanel
            title={title}
            backwardLink={backwardLink}
          />
        </aside>
        <section className={style.content}>
          {children}
        </section>
      </div>
    );
  }
}
