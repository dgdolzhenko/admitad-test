import * as React from 'react';

import { Button } from '../Button';

import * as style from './index.module.css';

export interface IErrorHandlerProps {
  hasError: boolean;
  errorText?: string;
  errorComponent?: React.ReactElement | null;
  errorStyles?: React.CSSProperties;
  errorClassName?: string;
}

export class ErrorHandler extends React.Component<IErrorHandlerProps> {
  public constructor(props: IErrorHandlerProps) {
    super(props);

    this.reloadWindow = this.reloadWindow.bind(this);
  }

  private reloadWindow(): void {
    window.location.reload();
  }

  public render() {
    const {
      errorComponent = null,
      errorClassName,
      errorStyles,
      errorText,
      hasError,
      children,
    } = this.props;

    const containerClassNames = [style.container];

    if (errorClassName) {
      containerClassNames.push(errorClassName);
    }

    const error = errorComponent !== null
      ? errorComponent
      : (
        <div className={containerClassNames.join(' ')}>
          <div
            className={style.error}
            style={errorStyles}
          >
            {errorText !== undefined ? errorText : 'При загрузке данных произошла ошибка'}
          </div>
          <Button
            text="Перезагрузить страницу"
            callback={this.reloadWindow}
          />
        </div>
      );

    return !hasError
      ? children
      : error;
  }
}
