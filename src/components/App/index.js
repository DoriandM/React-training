import React from 'react';
import PropTypes from 'prop-types';

import Pictures from '~/data/pictures';
// import Pictures from '~/components/App/data/pictures';
import Greeny from '~/components/Greeny/Greeny';

import './app.styl';

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">Gallery</h1>
        <p>
          here is a gallery of random pictures presented by greeny here, say hi greeny
        </p>
        <Greeny
          greeny={Pictures.greeny}
        />

      </div>
    );
  }
}

App.propTypes = {};

export default App;
