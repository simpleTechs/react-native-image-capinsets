import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';

const styles = StyleSheet.create({

});

class ImageCapInset extends Component {
  render() {
    return (
      <ImageBackground
        {...this.props}
        resizeMode='stretch'
      />
    );
  }
}

export default ImageCapInset;
