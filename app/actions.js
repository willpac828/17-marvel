// Don't mix up actions (a POJO)
// w/ action creators (functions that create actions)

function seriesInfoLoadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data
  };
}

function charactersFindAllComplete(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data
  };
}

function comicsFindAllComplete(data) {
  return {
    type: 'COMICS@FIND_ALL_COMPLETE',
    data
  };
}

function modalSet(mode) {
  // mode being 'on' or 'off'
  return {
    type: 'MODAL@SET',
    mode
  };
}

function modalClear(mode) {
  'MODAL@CLEAR',
  mode;
}
