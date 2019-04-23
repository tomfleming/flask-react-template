import * as React from 'react';

import { Menu } from "./Menu";

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1>
          Hello from Flask + {this.props.compiler} and {this.props.framework}!
        </h1>
        <h2>now with hot reloading!!</h2>
        <p>
          ... and don't forget about emmet and Leader-p for <b>Prettier</b>{' '}
          formatting!!!
        </p>
        <Menu selection="B" />
      </div>
    );
  }
}
