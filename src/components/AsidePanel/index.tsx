import * as React from 'react';
import { Link } from 'react-router-dom';

import * as style from './index.module.css';

export interface IAsidePanelProps {
  title: string;
  backwardLink?: string;
}

export class AsidePanel extends React.PureComponent<IAsidePanelProps> {
  public render() {
    const {
      title,
      backwardLink,
    } = this.props;

    return (
      <div className={style.container}>
        <div className={style.titleWrapper}>
          {backwardLink ? (
            <Link
              to={backwardLink}
              className={style.link}
            >
              <svg
                className={style.linkIcon}
                viewBox="0 0 199.404 199.404"
                width="16"
                height="16"
              >
                <path d="M199.404 81.529H74.742l53.245-53.244L99.701 0 0 99.702l99.701 99.702 28.286-28.285-53.245-53.243h124.662z"/>
              </svg>
            </Link>
          ) : null}
          <h1 className={style.title}>
            {title}
          </h1>
        </div>
      </div>
    );
  }
}
