import RegistrationForm from "../../registrationPage/components/registrationForm";
import {useForm} from "../../../hooks";
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useLayoutEffect} from "react";
import {SIGN_UP_REQUEST} from "../actions";
import {useHistory} from "react-router-dom";

const RegistrationPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const {isRegistered} = useSelector(state => state.registered);

  const [formData, handleChange] = useForm({
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    password: '',
    phone: '',
  })

  const handleSubmit = useCallback((event) =>{
    event.preventDefault();
    dispatch(SIGN_UP_REQUEST(formData));
  },[formData, dispatch])

  return (
    <RegistrationForm
      formValue={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isRegistered={isRegistered}
    />
  );
};

export default RegistrationPageContainer;
