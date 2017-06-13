import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { AccordionHeader } from './index';
import * as actions from '../actions';

const style = StyleSheet.create({
  descriptionStyle: {
    padding: 5
  },
});

class AccordionItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDetails() {
    const { accordionData, expanded } = this.props;
    const { descriptionStyle } = style;
    if (expanded) {
      return <Text style={ descriptionStyle }>{accordionData.description}</Text>;
    }
    return (
      <Text />
    );
  }

  render() {
    const { id, title } = this.props.accordionData;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectAccordion(id)}>
        <View>
          <AccordionHeader title={title}/>
          { this.renderDetails() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedAccordionId === ownProps.accordionData.id;
  return { expanded };
};

// The second argument here i,e actions will automatically add the properties
// from action to this.props
export default connect(mapStateToProps, actions)(AccordionItem);
