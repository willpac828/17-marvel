function seriesInfo(state = null, action) {
  switch (action.type) {
    case 'SERIES_INFO@LOAD':
      return action.data;
    default:
      return state;
  }
}

export default function()
