import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  function handleEvent(event) {
    console.log(formData);

    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevents from reloading this page and load the default value
    // submitApi(formData)
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="firstname"
        name="firstname"
        value={formData.firstname}
        onChange={handleEvent}
      />
      <input
        type="text"
        placeholder="lastname"
        name="lastname"
        value={formData.lastname}
        onChange={handleEvent}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={formData.email}
        onChange={handleEvent}
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={formData.phone}
        onChange={handleEvent}
      />
      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleEvent}
        id=""
        placeholder="comments"
      ></textarea>

      <span className=" box--input">
        <input
          type="checkbox"
          name="isFriendly"
          id="isFriendly"
          onChange={handleEvent}
        />
        <label htmlFor="isFriendly">is Friendly</label>
      </span>

      <fieldset className="box--input">
        <legend>current employment status</legend>
        <input
          type="radio"
          id="unemployed"
          value="unemployed"
          name="employment"
          onChange={handleEvent}
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">unemployed</label>
        <br />
        <input
          type="radio"
          id="partTime"
          value="partTime"
          name="employment"
          onChange={handleEvent}
          checked={formData.employment === "partTime"}
        />
        <label htmlFor="partTime"> part Time</label>
        <br />
        <input
          type="radio"
          id="fullTime"
          value="fullTime"
          name="employment"
          onChange={handleEvent}
          checked={formData.employment === "fullTime"}
        />
        <label htmlFor="fullTime">full Time</label>

        <br />
      </fieldset>

      <br />
      <label htmlFor="favColor">what is your fav color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleEvent}
        name="favColor"
      >
        <option value="">-- choose --</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
      </select>
      <br />

      <button> submit</button>
    </form>
  );
}
