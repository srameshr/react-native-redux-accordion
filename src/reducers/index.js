import { combineReducers } from 'redux';
import AccordionDataReducer from './AccordionDataReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  accordionData: AccordionDataReducer,
  selectedAccordionId: SelectionReducer,
});
