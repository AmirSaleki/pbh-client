import css from "./Accounting.module.css";
import Input from "../UI/Input/Input.component";
import Button from "../UI/Button/Button.component";
import axios from "axios";
import { useState, useEffect } from "react";

const Accounting = () => {
  const [isSale, setIsSale] = useState(false);
  const [isPay, setIsPay] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [price, setPrice] = useState(Number);
  const [weight, setWeight] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState({});

  const saleHandler = () => {
    setIsSale(true);
    setIsPay(false);
  };
  const payHandler = () => {
    setIsPay(true);
    setIsSale(false);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const weightHandler = (e) => {
    setWeight(e.target.value);
  };

  const selectCustomerHandler = async (e) => {
    const customerID = e.target.value;
    try {
      const res = await axios.get("/server/person/find/" + customerID);
      setSelectedCustomer(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async () => {
    try {
      await axios.put(
        `/server/person/update/${selectedCustomer._id}`,
        isSale
          ? {
              balance: parseFloat(selectedCustomer.balance) - parseFloat(price),
            }
          : {
              balance: parseFloat(selectedCustomer.balance) + parseFloat(price),
            }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const res = await axios.get("/server/person/");

        setCustomers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCustomers();
  }, [isSale, isPay]);

  return (
    <>
      <div className={css.modeSelect}>
        <div className={css.mode} onClick={saleHandler}>
          فروش
        </div>
        <div className={css.mode} onClick={payHandler}>
          دریافت
        </div>
      </div>
      <div className={css.column}>
        {isSale && (
          <form onSubmit={submitHandler}>
            <div className={css.row}>
              <h3>انتخاب شخص</h3>
              <select onChange={selectCustomerHandler}>
                <option>لطفا مشتری مورد نظر را انتخاب کنید</option>
                {customers.map((customer) => (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={css.row}>
              <h3>مبلغ بار فروخته شده (تومان)</h3>
              <Input onChange={priceHandler} />
            </div>
            <div className={css.row}>
              <h3>میزان بار به کیلوگرم</h3>
              <Input onChange={weightHandler} />
            </div>
            <Button className={"primary"} type="submit">
              ذخیره
            </Button>
          </form>
        )}
        {isPay && (
          <form onSubmit={submitHandler}>
            <div className={css.row}>
              <h3>انتخاب شخص</h3>
              <select onChange={selectCustomerHandler}>
                <option>لطفا مشتری مورد نظر را انتخاب کنید</option>

                {customers.map((customer) => (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={css.row}>
              <h3>مبلغ دریافت شده (تومان)</h3>
              <Input onChange={priceHandler} />
            </div>
            <Button className={"primary"} type="submit">
              ذخیره
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default Accounting;
