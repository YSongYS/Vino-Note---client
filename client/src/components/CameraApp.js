import React from 'react'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
class CameraApp extends React.Component {
  state = {
    photo: undefined
  }

  onTakePhoto (dataUri) {
    this.setState({photo: dataUri})
  }

  onCameraStop () {
    console.log('save the photo and go back to the form');
  }
 
  render () {
    return (
      <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          idealResolution = {{width: 640, height: 480}}
        />
        {this.state.photo ? <img src={this.state.photo} alt='wine'/> : null }
        <button className='camera-stop-btn' onClick={this.onCameraStop}>Camera Stop</button>
      </div>
    );
  }
}
 
export default CameraApp;