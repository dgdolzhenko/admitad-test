import * as React from 'react';
import { History, Location } from 'history';

import { MainMenu } from '../MainMenu';

import * as style from './index.module.css';

export interface IHeaderProps {
  history: History;
  location: Location;
}

export type THeaderProps = IHeaderProps;

export class Header extends React.Component<THeaderProps> {
  public render() {
    return (
      <div className={style.container}>
        <MainMenu />
      </div>
    );
  }
}
