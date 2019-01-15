import React from 'react';
import { appData } from './Data';
import { getComponent } from './ComponentFactory';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(appData());
    this.state = { component: appData() };
  }
  render() {
    var components = [];
    console.log(this.state);
    components.push(getComponent(this.state.component));

    console.log(components);

    return components;
  }
}

export default App;