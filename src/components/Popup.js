import React from 'react';
import '../index.css';

class Popup extends React.Component {

  render() {

    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <div className='close_button'>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
        </div>
      </div>
    );
  }
}


export default Popup;
