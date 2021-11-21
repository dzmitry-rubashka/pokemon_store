import PersonalDataPageLayout from "../components/personalDataPageLayout";

import {useSelector, useDispatch} from "react-redux";

const PersonalDataPageContainer = () => {
  const {info} = useSelector((state) => state.auth)

  return <PersonalDataPageLayout
    firstName={info.firstName}
    lastName={info.lastName}
    gender={info.gender}
    email={info.email}
    phone={info.phone}
  />
};

export default PersonalDataPageContainer;
