import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router';

import { ROUTES } from '../routes';
import { Main as MainLayout } from '../layouts/Main';
import { Main as MainPage } from '../pages/Main';
import { History as HistoryPage } from '../pages/History';

import * as style from './index.module.css';

export interface IContentProps extends RouteComponentProps {}

export class Content extends React.Component<IContentProps>  {
  public render() {
    return (
      <div className={style.container}>
        <MainLayout {...this.props}>
          <Switch>
            <Route
              exact={true}
              path={ROUTES.MAIN_PAGE}
              component={MainPage}
            />
            <Route
              path={ROUTES.HISTORY_PAGE}
              component={HistoryPage}
            />
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

export const ContentWithRouter = withRouter(Content);
