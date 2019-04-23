import * as React from 'react';

export interface MenuProps {
  selection: string;
}

interface State {
  currentSelection: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Menu extends React.Component<MenuProps, State> {
  constructor(props: MenuProps) {
    super(props);
    this.state = {currentSelection: props.selection};
  }

  textColor(selection: string) {
    if (selection == this.state.currentSelection) {
      return {color: 'red'};
    } else {
      return {color: 'black'};
    }
  }

  setSelection(selection: string) {
    this.setState({currentSelection: selection});
  }

  render() {
    return (
      <div>
        <a
          href="#"
          style={this.textColor('A')}
          onClick={() => this.setSelection('A')}>
          Sel A
        </a>
        <a
          href="#"
          style={this.textColor('B')}
          onClick={() => this.setSelection('B')}>
          Sel B
        </a>
        <a
          href="#"
          style={this.textColor('C')}
          onClick={() => this.setSelection('C')}>
          Sel C
        </a>
      </div>
    );
  }
}
