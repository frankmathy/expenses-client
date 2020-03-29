import { ADD_EXPENSE } from "../actionTypes";
const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE: {
      const { id, amount } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            amount
          }
        }
      };
    }
    default:
      return state;
  }
}
