// 'use client'
// import React, { createContext, useState } from 'react';

// export const AppContext = createContext();

// export function FormProvider({ children }) {
//     const [emailSubmitted, setEmailSubmitted] = useState(false);

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const { name, email, subject, message } = e.target;

//       // Validate form fields
//       if (!name.value || !email.value || !subject.value || !message.value) {
//           console.error('All fields are required.');
//           return;
//       }
//       // Prepare data for submission
//       const data = {
//           name: name.value,
//           email: email.value,
//           subject: subject.value,
//           message: message.value,
//       };
//       const JSONdata = JSON.stringify(data);
//       const endpoint = "/api/send";
// console.log(JSONdata)
//       // Fetch options
//       const options = {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSONdata,
//       };

//       try {
//           // Send request
//           const response = await fetch(endpoint, options);

//           // Check for errors
//           if (!response.ok) {
//               throw new Error('Failed to send message.');
//           }

//           // Log response
//           console.log(await response.json());
          
//           // Update state if successful
//           setEmailSubmitted(true);
//           console.log("Message sent.");
//       } catch (error) {
//           console.error('Error sending message:', error.message);
//       }
//   };

//     // Return review data and fetch function.
//     return (
//       <AppContext.Provider value={{
//           handleSubmit,
//           emailSubmitted
//       }}>
//           {children}
//       </AppContext.Provider>
//   );
// }
