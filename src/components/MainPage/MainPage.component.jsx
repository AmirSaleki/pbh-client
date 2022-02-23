import css from "./MainPage.module.css";
import Card from "../UI/Card/Card.component";
import Accounting from "../Accounting/Accounting.component";
import Person from "../Person/Person.component";
import Reports from "../Reports/Reports.component";

import { useDispatch } from "react-redux";
import { loginActions } from "../../store/login-slice";
import { useState, useEffect } from "react";

const MainPage = () => {
  const dispatch = useDispatch();
  const [isAccounting, setIsAccounting] = useState(true);
  const [isPersonPage, setIsPersonPage] = useState(false);
  const [isReportsPage, setIsReportsPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isPersonPageHandler = () => {
    setIsPersonPage(true);
    setIsAccounting(false);
    setIsReportsPage(false);
  };
  const isAccountingHandler = () => {
    setIsAccounting(true);
    setIsPersonPage(false);
    setIsReportsPage(false);
  };
  const isReportsPageHandler = () => {
    setIsReportsPage(true);
    setIsAccounting(false);
    setIsPersonPage(false);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    dispatch(loginActions.logout());
  };
  useEffect(() => {
    isLoggedIn &&
      setTimeout(() => {
        dispatch(loginActions.logout());
      }, 1800000);
  }, [isLoggedIn, dispatch]);
  return (
    <>
      <div className={css.container}>
        <Card>
          <div className={css.navbar}>
            <div onClick={isAccountingHandler} className={css.navItems}>
              حساب روزانه
            </div>
            <div onClick={isReportsPageHandler} className={css.navItems}>
              گزارش ها
            </div>
            <div onClick={isPersonPageHandler} className={css.navItems}>
              اشخاص
            </div>
            <div onClick={logoutHandler} className={css.navItems}>
              خروج
            </div>
          </div>
          <div className={css.content}>
            {isAccounting && <Accounting />}
            {isPersonPage && <Person />}
            {isReportsPage && <Reports />}
          </div>
        </Card>
      </div>
    </>
  );
};

export default MainPage;
