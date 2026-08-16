import React, { useState } from "react";

const App = () => {
  // const [fname, setFname] = useState('');
  // const [lname, setLname] = useState('');
  // const changeHandler = (e) => {
  //   // console.log(e.target.value);
  //   setFname(e.target.value);
  // }
  // const changeHandlerlast = (e) => {
  //   // console.log(e.target.value);
  //   setLname(e.target.value);
  // }

  // * using object as state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textArea: "",
    checkBox: false,
    mode: "",
    favCar: ""
  });
  const formHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        // [e.target.name]: e.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    // console.log(formData.firstName);
    // console.log(formData.lastName);
    // console.log(formData.email);

    // console.log(formData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Print -> ", formData);
  }
  return (
    <form onSubmit={submitHandler}>
      {/* <input type="text" name="" id="" placeholder='firstName' value={fname} onChange={changeHandler}/>
      <br />
      <input type="text" name="" id="" placeholder='lastName' value={lname} onChange={changeHandlerlast}/>
      <br /> */}

      <input
        type="text"
        placeholder="firstName"
        name="firstName"
        id=""
        value={formData.firstName}
        onChange={formHandler}
      />
      <input
        type="text"
        name="lastName"
        id=""
        placeholder="lastName"
        value={formData.lastName}
        onChange={formHandler}
      />
      <input
        type="email"
        name="email"
        id=""
        placeholder="email"
        value={formData.email}
        onChange={formHandler}
      />

      <textarea
        name="textArea"
        id=""
        placeholder="write a review"
        value={formData.textArea}
        onChange={formHandler}
      ></textarea>
      <label htmlFor="visible">Am I Visible : </label>
      <input
        type="checkbox"
        name="checkBox"
        id="visible"
        onChange={formHandler}
        checked={formData.checkBox}
      />

      <fieldset>
        <legend>Mode</legend>
        <input
          type="radio"
          name="mode"
          id="online-mode"
          onChange={formHandler}
          value="Online Mode"
          checked={formData.mode === "Online Mode"}
        />
        <label htmlFor="online-mode">Online Mode</label>

        <input
          type="radio"
          name="mode"
          id="offline-mode"
          onChange={formHandler}
          value="Offline Mode"
          checked={formData.mode === "Offline Mode"}
        />
        <label htmlFor="offline-mode">Offline Mode</label>
      </fieldset>


      <select name="" id=""
        onChange={formHandler}
        name='favCar'
        id="favCar"
        value={formData.favCar}
      >
        <option value="scarpio">Scarpio</option>
        <option value="thar">Thar</option>
        <option value="defender">Defender</option>
        <option value="bmw">BMW</option>
      </select>

        <button>submit</button>
    </form>
  );
};

export default App;
