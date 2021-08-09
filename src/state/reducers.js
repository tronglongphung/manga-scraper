import { useReducer } from 'react';
import { ADD_MANGA, LOADING_MANGA } from './actionTypes';
// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MANGA:
      return {
        ...state,
        mangas: action.data || [],
      };

    case LOADING_MANGA:
      return {
        ...state,
        loadingManga: action.data,
      };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useMangaReducer(initialState) {
  return useReducer(reducer, initialState);
}
