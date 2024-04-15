'use client'
import React, { createContext, useState } from 'react';
import Contact from '../components/contactme';

export const AppContext = createContext();

export function FormProvider({ children }) {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const res = await fetch('/api/send',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        }) 
        const resData = await res.json();
        console.log("This is the form data", resData)
        if(res.status === 200){
            console.log("Email sent")
            setEmailSubmitted(true);
        }
    }
    return (
      <AppContext.Provider value={{
          handleSubmit,
          emailSubmitted
      }}>
          <Contact/>
      </AppContext.Provider>
  );
}
