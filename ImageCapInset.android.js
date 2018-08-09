import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  requireNativeComponent,
} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

class ImageCapInset extends Component {
  render() {
    const {
      children,
      source,
      capInsets,
      ...rest
    } = this.props;

    const normalizedSource = resolveAssetSource(source);

    return (
      <View {...rest}>
        <RCTImageCapInset
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          capInsets={capInsets}
          source={normalizedSource}
          resizeMode='stretch'
        />
        {children}
      </View>
    );
  }
}

const RCTImageCapInset = requireNativeComponent('RCTImageCapInset', {});

export default ImageCapInset;
