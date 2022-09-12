import RegistrationForm from "../components/registrationForm";
import { useForm } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { SIGN_UP_REQUEST } from "../actions";

import isEmail from "validator/es/lib/isEmail";

const RegistrationPageContainer = () => {
  const dispatch = useDispatch();

  const { isRegistered, error } = useSelector((state) => state.registered);

  const [formData, handleChange] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    phone: "",
  });

  const isRegistrationValid = isEmail(formData.email);
  const isPasswordValid = formData.password.length > 0;
  const isGenderValid =
    formData.gender === "male" || formData.gender === "female";
  const idFirstNameValid = typeof formData.firstName === "string";
  const idLastNameValid = typeof formData.lastName === "string";

  const isFormValid =
    isRegistrationValid &&
    isPasswordValid &&
    isGenderValid &&
    idFirstNameValid &&
    idLastNameValid;
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(SIGN_UP_REQUEST(formData));
    },
    [formData, dispatch]
  );

  return (
    <RegistrationForm
      formValue={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isRegistered={isRegistered}
      error={error}
      isFormValid={isFormValid}
    />
  );
};

export default RegistrationPageContainer;
