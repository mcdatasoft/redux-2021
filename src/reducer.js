const initialState = {
  ads: [],
  fetching: false,
  fetched: false,
  nombre: 'marcos cuadros',
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ADS':
      return { ...state, fetching: true };
    case 'FETCH_ADS_REJECTED':
      return { ...state, fetching: false, error: action.payload };
    case 'FETCH_ADS_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        ads: action.payload
      };

    default:
      return state;
  }
}