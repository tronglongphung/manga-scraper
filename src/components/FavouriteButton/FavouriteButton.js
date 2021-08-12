import { REMOVE_FROM_WISHLIST, SAVE_TO_WISHLIST } from '../../state/actionTypes';
import { useStoreContext } from '../../state/GlobalState';
import { useMutation } from '@apollo/client';
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../../api/mutations';

export default function FavouriteButton({ mangaId }) {
  const [state, dispatch] = useStoreContext();

  const [addFavourite, { loading: addLoading, data: addData }] = useMutation(ADD_TO_FAVOURITES);
  const [removeFavourite, { loading: removeLoading, data: removeData }] = useMutation(REMOVE_FROM_FAVOURITES);

  const isFavourite = () => state.wishlist.includes(mangaId);

  const saveFav = async (id) => {
    if (isFavourite()) {
      console.log(`Removed ${id} from wishlist`);
      await removeFavourite({ variables: { id } });
      dispatch({ type: REMOVE_FROM_WISHLIST, id });
    } else {
      console.log(`Added ${id} to wishlist`);
      await addFavourite({ variables: { id } });
      dispatch({ type: SAVE_TO_WISHLIST, id });
    }
  };

  return (
    <button onClick={() => saveFav(mangaId)} className="favIcon relative top-1 left-2 bg-white rounded-full">
      {isFavourite() ? '❤️' : '🖤'}
    </button>
  );
}
