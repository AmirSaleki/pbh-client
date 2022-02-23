import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/login-slice";
import { profileActions } from "../../store/profile";
import axios from "axios";
import css from "./Login.module.css";
import Input from "../UI/Input/Input.component";
import Card from "../UI/Card/Card.component";
import Button from "../UI/Button/Button.component";

const Login = () => {
  const dispatch = useDispatch();
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const userNameHandler = (el) => {
    setEnteredUserName(el.target.value);
    dispatch(profileActions.addEmail(el.target.value.trim()));
  };

  const passwordHandler = (el) => {
    setEnteredPassword(el.target.value);
  };

  const showPasswordHandler = (e) => {
    e.target.checked ? setShowPassword(true) : setShowPassword(false);
  };

  const logoutHandler = (expireTime) => {
    window.setTimeout(() => {
      dispatch(loginActions.logout());
      console.log("started to count from " + expireTime * 1000);
    }, expireTime * 1000);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("/server/user/find/6216761e73b55e4a97faafa6");
      if (
        res.data.username === enteredUserName &&
        res.data.password === enteredPassword
      ) {
        const expireTime = 360000;
        dispatch(loginActions.login(expireTime));
        logoutHandler(expireTime);
      } else {
        alert("نام کاربری یا کلمه عبور اشتباه است");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={css.background}>
        <div className={css.container}>
          <Card>
            <form className={css.form} onSubmit={submitHandler}>
              <h2> سامانه حسابرسی و انبارداری پوربیرامی هیر</h2>
              <Input
                type="text"
                placeholder="نام کاربری"
                onChange={userNameHandler}
                required
              />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="رمز عبور"
                onChange={passwordHandler}
                required
              />

              <span className={css.showPassword}>
                <input
                  onChange={showPasswordHandler}
                  id="show-password"
                  type="checkbox"
                />
                <label id="sp-label" htmlFor="show-password">
                  رویت رمز عبور
                </label>
              </span>
              <Button className={"primary"}>ورود</Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Login;
