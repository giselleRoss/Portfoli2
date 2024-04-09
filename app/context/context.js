'use client'
import { createContext, useState } from 'react';

export const AppContext = createContext();

export function FormProvider({ children }) {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    console.log(await response.json());

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

    // Return review data and fetch function.
    return (
        <AppContext.Provider value={{
            handleSubmit,
            emailSubmitted
        }}>
            {children}
        </AppContext.Provider>
    );
}
