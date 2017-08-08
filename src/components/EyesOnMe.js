// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  render () {
    return (
      <button onFocus={this.printGood} onBlur={this.printEyes} />
    )
  }

  printGood() {
    console.log('Good!')
  }

  printEyes() {
    console.log('Hey! Eyes on me!')
  }


}

export default EyesOnMe
