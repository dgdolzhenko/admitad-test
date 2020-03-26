import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { MAIN_MENU_NAV_OPTIONS } from './nav';

import * as style from './index.module.css';

export class MainMenu extends React.PureComponent {
  public render() {
    return (
      <nav className={style.container}>
        <ul className={style.list}>
          {MAIN_MENU_NAV_OPTIONS.map(item => (
            <li
              className={style.item}
              key={item.id}
            >
              <NavLink
                exact={item.exact}
                to={item.link}
                className={style.button}
                activeClassName={style.buttonActive}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
