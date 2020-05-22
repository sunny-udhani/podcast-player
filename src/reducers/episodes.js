export default function episodes(state = {}, action) {
  return {
    byUrl: byUrl(state.byUrl, action),
    feed: feed(state.feed, action)
  }
}

function byUrl(state = {}, action) {
  switch (action.type) {
    case "ADD_FEED":
      return {
        ...state,
        [action.data.url]: action.data.podcastData
      }
    default:
      return state;
  }
}

function feed(state = {}, action) {
  switch (action.type) {
    case "SET_FEED":
      return action.data;
    default:
      return state;
  }
}
