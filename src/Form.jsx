import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [add, setAdd] = useState("");
  const [pin, setPin] = useState("");
  const [mobile, setMobile] = useState("");
  const [record, setRecord] = useState([]);

  const SubmitForm = (e) => {
    e.preventDefault();
    const newRecord = {
      email: email,
      pass: pass,
      add: add,
      pin: pin,
      mobile: mobile
    };
    setRecord([...record, newRecord]);
  };
  return (
    <>
      <h1>Signup Form</h1>
      <div className="main">
        <form action="">
          <label htmlFor="">Enter Your Email</label>
          <br />
          <input
            type="email"
            placeholder="enter the email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="">Enter Your Password</label>
          <br />
          <input
            type="text"
            placeholder="enter your passwor"
            className="input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
          <label htmlFor="">Enter Your Mobile Number</label>
          <input
            type="number"
            className="input"
            placeholder="enetr the mobile  number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />

          <label htmlFor="">Enter the adress</label>
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="enter the adress"
            className="input"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
          <br />
          <label htmlFor="">Enter the pin code</label>
          <br />
          <input
            type="number"
            name=""
            id=""
            placeholder="enter your pin code"
            className="input"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />

          <button onClick={SubmitForm} className="btn">
            Sumbit
          </button>
        </form>
      </div>
      <div>
        {record.map((curEle) => {
          return (
            <>
              <div className="sub">
                <p>{curEle.email}</p>
                <p>{curEle.pass}</p>
                <p>{curEle.mobile}</p>
                <p>{curEle.add}</p>
                <p>{curEle.pin}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Form;
