import {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import CartPageLayout from "../components/cartPageLayout";
import {ADD_POKEMON_REQUEST, CHANGE_QUANTITY_REQUEST, DELETE_POKEMON_REQUEST, GET_CART_REQUEST, CLEAR_CART} from "../actions";
import {ADD_ORDER_REQUEST} from "../../personalDataPage/actions";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const {isLoading, totalPrice, itemsList} = useSelector((state) => state.cart);
  const {info} = useSelector((state) => state.auth)

  const handleIncrement = useCallback((pokemon) => {
    const newValue = {
      id: pokemon.id,
      quantity: pokemon.quantity + 1,
    }
    dispatch(CHANGE_QUANTITY_REQUEST(newValue));
  }, [dispatch]);

  const handleDecrement = useCallback((pokemon) => {
    if (pokemon.quantity > 1) {
      const newValue = {
        id: pokemon.id,
        quantity: pokemon.quantity - 1,
      }
      dispatch(CHANGE_QUANTITY_REQUEST(newValue));
    }
  }, [dispatch]);

  const handleAddPokemon = useCallback((state) => {
    const newPokemon = {
      ...state,
      quantity: 1,
    }
    dispatch(ADD_POKEMON_REQUEST(newPokemon));
  }, [dispatch]);

  const handleDeletePokemon = useCallback((pokemon) => {
    dispatch(DELETE_POKEMON_REQUEST(pokemon));
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  const handleAddNewOrder = useCallback(() => {
      const addNewOrder = {
        itemsList: itemsList,
        totalPrice: totalPrice,
        customerId: info._id,
      }
      dispatch(ADD_ORDER_REQUEST(addNewOrder));
      dispatch(CLEAR_CART());
    },
    [dispatch, itemsList, totalPrice, info]
  );

  useEffect(() => {
    dispatch(GET_CART_REQUEST())
  }, [dispatch])

  return <CartPageLayout
    isLoading={isLoading}
    totalPrice={totalPrice}
    itemsList={itemsList}
    handleIncrement={handleIncrement}
    handleDecrement={handleDecrement}
    handleAddPokemon={handleAddPokemon}
    handleDeletePokemon={handleDeletePokemon}
    handleAddNewOrder={handleAddNewOrder}
  />
};

export default CartPageContainer

