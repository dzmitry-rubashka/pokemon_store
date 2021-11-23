import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

import {GET_ORDER_REQUEST} from '../actions';

import PersonalDataPageLayout from "../components/personalDataPageLayout";

const PersonalDataPageContainer = () => {
  const {info} = useSelector((state) => state.auth);
  const {isLoading} = useSelector((state) => state.personalData);
  const {itemsList, ordersList, totalPrice, createdAt} = useSelector((state) => state.personalData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_ORDER_REQUEST())
  }, [dispatch])

  return <PersonalDataPageLayout
    firstName={info.firstName}
    lastName={info.lastName}
    gender={info.gender}
    email={info.email}
    phone={info.phone}

    isLoading={isLoading}
    itemsList={itemsList}
    ordersList={ordersList}
    totalPrice={totalPrice}
    createdAt={createdAt}
  />
};

export default PersonalDataPageContainer;
