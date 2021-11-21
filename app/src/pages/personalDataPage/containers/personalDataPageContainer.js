import PersonalDataPageLayout from "../components/personalDataPageLayout";

import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {GET_ORDER_REQUEST} from '../actions';

const PersonalDataPageContainer = () => {
  // const dispatch = useDispatch();
  const {info} = useSelector((state) => state.auth)
  // const {ordersList, totalPrice, isLoading} = useSelector((state) => state.personalDataPageReducer)
  // const {itemsList} = useSelector((state) => state.cart)

  // useEffect(() => {
  //   dispatch(GET_ORDER_REQUEST())
  // }, [dispatch])

  return <PersonalDataPageLayout
    firstName={info.firstName}
    lastName={info.lastName}
    gender={info.gender}
    email={info.email}
    phone={info.phone}

    // itemsList={itemsList}
    // ordersList={ordersList}
    // totalPrice={totalPrice}
    // isLoading={isLoading}
  />
};

export default PersonalDataPageContainer;
