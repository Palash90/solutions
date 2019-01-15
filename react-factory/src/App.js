import React from 'react';
import { appData } from './Data';
import { getComponent } from './ComponentFactory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { component: appData(props.user) };
  }
  render() {
    var components = [];
    if (this.state.component) {
      components.push(getComponent(this.state.component));
    } else {
      components.push(<p>No Such User exists, please check the documentation.</p>);
    }
    return components;
  }
}

export default App;