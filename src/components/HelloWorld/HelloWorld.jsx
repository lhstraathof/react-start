import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HelloWorld.scss';

const cx = classNames.bind(styles);

class HelloWorld extends PureComponent {

  static defaultProps = {
    text: 'World',
  };

  static propTypes = {
    /** This should be the description */
    text: string.isRequired,
  };

  render() {
    const cssClasses = cx({
      'h1': true,
    });
    return (
      <h1 className={cssClasses}>Hello {this.props.text}!</h1>
    );
  }
}

export default HelloWorld;