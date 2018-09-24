import React from 'react';
import DisplayZone from './components/DisplayZone'

import { scroll } from './redux/actions'






class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
        this.props.store.dispatch(scroll(window.scrollY))
    })
  }

  render() {
    return ([
        <header key='header'>
            <h1>I am header</h1>
        </header>,
        <main key='body' id='container' >
            <DisplayZone key='disp'/>
        </main>,
        <footer key='footer'>
            <hr />
            I am footer
        </footer>
    ]);
  }
}





export default App;

