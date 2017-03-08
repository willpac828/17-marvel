
// Lets us use the combine Reducers function at the bottom instead of
// individually exporting each function
// Its a property of an object, hence the notation
import { combineReducers } from 'redux';


function seriesInfo(state = null, action) {
  switch (action.type) {
    case 'SERIES_INFO@LOAD':
      return action.data;
    default:
      return state;
  }
}

// function characterData(state = null, action) {
//   switch (action.type) {
//     case 'CHARACTERS@FIND_ALL_COMPLETE':
//       return action.data;
//     default:
//       return state;
//   }
// }

// function comicData(state = null, action) {
//
// }
//
// function modal(state = null, action) {
//
// }

// Notation for exporting combined Reducers.
// They are properties of an obj, hence the commas
export default combineReducers({
  seriesInfo,
  // characterData,
  // comicData,
  // modal
});
