import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import AccordionItem from './AccordionItem';

class AccordionList extends Component {

  static renderRow(accordionData) {
    return <AccordionItem accordionData={accordionData} />;
  }

  componentWillMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(this.props.accordionData);
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={AccordionList.renderRow}
      />
    );
  }
}

const mapStateToProps = state => ({
  accordionData: state.accordionData,
  selectedAccordionId: state.selectedAccordionId,
});

export default connect(mapStateToProps)(AccordionList);
