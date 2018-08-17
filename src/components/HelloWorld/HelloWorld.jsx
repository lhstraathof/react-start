import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import './HelloWorld.scss';

class HelloWorld extends PureComponent {

  static defaultProps = {
    text: 'World',
  };

  static propTypes = {
    /** This should be the description */
    text: string.isRequired,
  };

  render() {
    return (
      <h1 className="h1">Hello {this.props.text}!</h1>
    );
  }
}

export default HelloWorld;