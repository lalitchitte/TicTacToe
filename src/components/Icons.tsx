import {View, Text} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color={'#EEC213'}></Icon>;
      break;

    case 'cross':
      return <Icon name="times" size={38} color={'#DFAF2B'}></Icon>;
      break;

    default:
      return <Icon name="pencil" size={38} color={'#E8290B'}></Icon>;
  }
  return (
    <View>
      <Text>Icons</Text>
    </View>
  );
};

export default Icons;
