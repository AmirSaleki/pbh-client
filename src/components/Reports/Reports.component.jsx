import css from "./Reports.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Reports = () => {
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const [customers, setCustomers] = useState([]);

  const selectCustomerHandler = async (e) => {
    const customerID = e.target.value;
    try {
      const res = await axios.get("/server/person/find/" + customerID);
      setSelectedCustomer(res.data);
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
  }, []);
  return (
    <>
      <div className={css.container}>
        <div className={css.selectPerson}>
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

        <div className="results">
          <h3> مانده حساب </h3>
          <h1>{selectedCustomer.balance} tomans</h1>
        </div>
      </div>
    </>
  );
};

export default Reports;
