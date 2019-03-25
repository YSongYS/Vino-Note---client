import React from 'react'
import Camera from 'react-html5-camera-photo';
import { Button, Image } from 'semantic-ui-react';
import 'react-html5-camera-photo/build/css/index.css';

class CameraApp extends React.Component {

  render () {
    return (
      <div className="App">
        {!this.props.image ? <Camera
          onTakePhoto = { (dataUri) => this.props.onTakePhoto(dataUri) }
          idealResolution = {{width: 640, height: 480}}
        /> :
        <div>
        <Image src={this.props.image} alt='wine' size='massive'/>
        <br/>
        <Button onClick={this.props.onCameraRetake} positive>Retake</Button>
        </div>
      }
      </div>
    );
  }
}

export default CameraApp;
