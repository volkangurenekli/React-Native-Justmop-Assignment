import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Content, Card, CardItem, Text, Body, Right} from 'native-base';
const noImage = 'https://ya-webdesign.com/transparent250_/no-image-png-1.png';

const DetailedCard = ({data}) => {
  return (
    <Content>
      <Card>
        <CardItem>
          <Body style={styles.body}>
            <Image
              source={{
                uri: data.img ? data.img : noImage,
              }}
              style={styles.image}
            />
          </Body>
          <Right style={styles.right}>
            {data.artist ? <Text>Artist: {data.artist}</Text> : null}
            {data.attack ? <Text>Attack: {data.attack}</Text> : null}
            {data.cardId ? <Text>Card ID: {data.cardId}</Text> : null}
            {data.cardSet ? <Text>Card Set: {data.cardSet}</Text> : null}
            {data.cost ? <Text>Cost: {data.cost}</Text> : null}
            {data.name ? <Text>Name: {data.name} </Text> : null}
            {data.playerClass ? (
              <Text>Player Class: {data.playerClass} </Text>
            ) : null}
            {data.type ? <Text>Type: {data.type} </Text> : null}
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default DetailedCard;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    right: 20,
  },
  image: {
    height: '100%',
    width: 100,
  },
  right: {alignItems: 'flex-start', right: 20},
});
