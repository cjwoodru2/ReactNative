import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image
  } = album;
  const {
    thumbnailStyle,
    headerAlbumStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerTextStyle}>
          <Text style={headerAlbumStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button />
      </CardSection>
    </Card>

  );
};

const styles = {
  headerTextStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerAlbumStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
