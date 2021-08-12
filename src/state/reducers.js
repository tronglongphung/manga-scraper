import { useReducer } from 'react';
import { ADD_MANGA, LOADING_MANGA, REMOVE_FROM_WISHLIST, SAVE_TO_WISHLIST } from './actionTypes';
// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MANGA: {
      return {
        ...state,
        mangas: action.data || [],
      };
    }

    case LOADING_MANGA:
      return {
        ...state,
        loadingManga: action.data,
      };

    case SAVE_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, ...action.id],
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item !== action.id),
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
