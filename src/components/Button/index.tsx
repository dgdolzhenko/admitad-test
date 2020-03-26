import * as React from 'react';
import * as style from './index.module.css';

export interface IButtonProps {
  text: string;
  link?: string;
  callback?(e: React.SyntheticEvent): void;
  isDisabled?: boolean;
}

export class Button extends React.PureComponent<IButtonProps> {
  public render() {
    const {
      isDisabled,
      link,
      text,
      callback,
    } = this.props;

    const buttonClassNames = [style.button];

    if (isDisabled) {
      buttonClassNames.push(style.disabled);
    }

    return link ? (
      <a
        className={buttonClassNames.join(' ')}
        href={link}
        onClick={callback}
      >
        {text}
      </a>
    ) : (
      <button
        type="button"
        className={buttonClassNames.join(' ')}
        onClick={callback}
      >
        {text}
      </button>
    );
  }
}
