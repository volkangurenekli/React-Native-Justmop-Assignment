import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from 'native-base';
const logo = require('../Logo/logo.png');

const XCard = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={logo}
                style={{
                  backgroundColor:
                    '#' +
                    Math.random()
                      .toString(16)
                      .slice(2, 8),
                }}
              />
              <Body>
                <Text>{title}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </TouchableOpacity>
  );
};

export default XCard;
