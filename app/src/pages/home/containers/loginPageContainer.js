import LoginForm from "../components/loginForm";

import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useLayoutEffect} from "react";
import {useHistory} from "react-router-dom";

import {useForm} from "../../../hooks";

import {ROUTES} from "../../../routes/routeNames";

import {LOG_IN_REQUEST} from "../actions";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const {isAuth, error} = useSelector(state => state.auth);


  const [formData, handleChange, handleFormReset] = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = useCallback((event) =>{
    event.preventDefault();
    dispatch(LOG_IN_REQUEST(formData));
    handleFormReset()
  },[formData, dispatch])

  useLayoutEffect(() => {
    if (isAuth) {
      history.push(ROUTES.POKEMONS)
    }

  },[isAuth])

  return (
    <LoginForm
      formValue={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      handleFormReset={handleFormReset}
      error={error}
    />
  );
};

export default LoginPageContainer;