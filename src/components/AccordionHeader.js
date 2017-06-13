import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
  headerTextStyle: {
    fontSize: 16
  },
});

const AccordionHeader = (props) => {
  console.log(props)
  const { containerStyle, headerTextStyle } = styles;
  return (
      <View style={ containerStyle }>
        <Text style={ headerTextStyle }>{ props.title }</Text>
      </View>
  );
};

export { AccordionHeader };
