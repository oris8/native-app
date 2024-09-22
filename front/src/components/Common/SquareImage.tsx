import React from 'react';
import {View, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface SquareImageProps {
  source: ImageSourcePropType;
  size?: number;
}

const SquareImage = ({source, size = 100}: SquareImageProps) => {
  return (
    <View style={[styles.container, {width: size, height: size}]}>
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SquareImage;
