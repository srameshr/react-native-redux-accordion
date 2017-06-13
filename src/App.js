import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import AccordionList from './components/AccordionList';

class Accordion extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <AccordionList />
        </View>
      </Provider>
    );
  }
}

export default Accordion;
