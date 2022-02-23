import css from "./Person.module.css";
import Input from "../UI/Input/Input.component";
import Button from "../UI/Button/Button.component";
import { useState } from "react";
import axios from "axios";

const Person = () => {
  const [personName, setPersonName] = useState("");
  const [personBalance, setPersonBalance] = useState("");

  const nameHandler = (e) => {
    setPersonName(e.target.value);
  };
  const balanceHandler = (e) => {
    setPersonBalance(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addPerson();
    setPersonName("");
    setPersonBalance("");
  };

  const addPerson = async () => {
    try {
      const newPerson = { name: personName, balance: personBalance };
      await axios.post("/server/person/register/", newPerson);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={css.column}>
        <div className={css.row}>
          <h3>نام و نام خانوادگی</h3>
          <Input onChange={nameHandler} value={personName} />
        </div>
        <div className={css.row}>
          <h3>مانده حساب</h3>
          <Input onChange={balanceHandler} value={personBalance} />
        </div>
        <Button type={"submit"} className={"primary"}>
          ذخیره
        </Button>
      </form>
    </>
  );
};

export default Person;
