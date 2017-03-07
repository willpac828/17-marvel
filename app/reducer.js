
// Lets us use the combine Reducers function at the bottom instead of
// individually exporting each function
// Its a property of an object, hence the notation
import { combineReducers } from 'redux';

function seriesInfo(state, action) {

}

function characterData(state, action) {

}

function comicData(state, action) {

}

function modal(state, action) {

}

// Notation for exporting combined Reducers.
// They are properties of an obj, hence the commas
export default combineReducers({
  seriesInfo,
  characterData,
  comicData,
  modal
});
