import React, {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: "", email: ""}
)

function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

return (
    <form>
      {/* // THIS WAY WORKS BUT ITS BEST PRACTICE TO GIVE EACH INPUT A VALUE SO IT HAS ITS OWN STATE  */}
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
        />
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            // we added value to our inouts for controlled components 
            value={formData.lastName}
        />
        <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
        />
    </form>
)
}

export default App;
