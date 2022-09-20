import React from 'react';
import HornedBeast from './HornedBeast';
import beast1 from './assets/beast1.jpeg';
import beast2 from './assets/beast2.jpeg';


class Main extends React.Component {
  render() {
    return (
      <>
        <div id="mainDiv">
          <HornedBeast
            title="Fierce Dragon"
            src={beast1}
            description="A dragon ready to spew forth flame."
            alt="Dragon"
            />
          <HornedBeast
            title="Unicorn and Family"
            src={beast2}
            description="A unicorn and her child running in a field."
            alt="Unicorn"
            />
        </div>
      </>
    );
  }
}

export default Main;