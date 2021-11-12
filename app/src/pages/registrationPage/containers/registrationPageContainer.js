import RegistrationForm from "../../registrationPage/components/registrationForm";
import {useForm} from "../../../hooks";
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useLayoutEffect} from "react";
import {SIGN_UP_REQUEST} from "../actions";
import {useHistory} from "react-router-dom";
import {ROUTES} from "../../../routes/routeNames";

const RegistrationPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const {isRegistered} = useSelector(state => state.registered); //?????????????????????????

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

  useLayoutEffect(() => {
    if (isRegistered) {
      history.push(ROUTES.HOME)
    }
  },[isRegistered])

  return (
    <RegistrationForm
      formValue={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default RegistrationPageContainer;
