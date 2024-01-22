import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';

const HomeScreen = () => {
  const coffeeList = useStore((state: any) => state.CoffeeList);
  const beanList = useStore((state: any) => state.BeanList);
  console.log(coffeeList);
  console.log(beanList.length);

  return (
    <View>
      <Text style={{color: '#000'}}>{coffeeList.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
