import { useState } from "react";

export default function FormSubmit() {
  const [formData, setformData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    news: true,
  });

//   console.log(formData);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value, type, checked } = event.target;
    setformData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(formData);

    if (formData.password === formData.confirm_password){
        if (formData.news === true) {
            console.log("thank you for signing up for newsletter");
            
        }
        console.log("login successfull");
        
    } else {
        console.log("password do not match correctly");
        
    }

   
    
  }

  const form = (
    <section className="w-2/4 mx-auto mt-7">
      <div >
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="username"
          onChange={handleChange}
          value={formData.username}
          id="username"
          name="username"
          className=" p-5 border border-gray-600 "
        />
        <input
          type="text"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
          id="password"
          name="password"
          className="p-5 border border-gray-600 "
        />
        <input
          type="text"
          placeholder="confirm password"
          onChange={handleChange}
          value={formData.confirm_password}
          id="confirm_password"
          name="confirm_password"
          className="p-5 border border-gray-600 "
        />

        <span>
         
          <input
            type="checkbox"
            name="news"
            id="news"
            className="pr-3 mr-4 "
            onChange={handleChange}
            checked={formData.news}
            
          />
          <label htmlFor="news" className="capitalize">
            i want to join the newsletter
          </label>
        </span>

        <button
          type="submit"
          className="bg-purple-600 text-white py-4 uppercase"
        >
          Sign Up
        </button>
        </form>
      </div>
    </section>
  );

  return form;
}
