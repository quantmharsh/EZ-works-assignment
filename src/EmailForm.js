import React, { useState } from 'react';
import ezlogo from './ezlogo.png';
import './EmailForm.css'


const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if email ends with @ez.works
    if (email.endsWith('@ez.works')) {
      setError('Emails ending with @ez.works are not allowed.');
      setResponse('');
      return;
    }
  
    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      setResponse('');
      return;
    }
  
    try {
      const response = await fetch('http://3.228.97.110:9000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        setResponse('Form Submitted');
        setError('');
      } else {
        setError(responseData.detail[0].msg || 'Error submitting email.');
        setResponse('');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Form Submitted✅ ');
      setResponse('');
    }
  };
  

  return (
    <div className="email-form-container">
       <img src={ezlogo} alt="Email" className="ezlogo" />
      <h1>Suite Of Business Support Services</h1>
      <p> lorem gkrjwoef fvjergheif vjfghdefireg dfdjiof feugireg eergheg
        fgrejguefhei erghiofweoiw verguhweiofweod gurhgoweigwoed ruhgiweoe ugherifwh erghiofweoiw
        gugwhigb wiowihgw
      </p>
     

      <form onSubmit={handleSubmit}>
        <div className="form-group">
         
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
       
        {error && <p className="error">{error}</p>}
       
          <button type="submit" style={{ color:'white' ,backgroundColor:'#EA7B2C'}}>Contact me</button>
        
        </div>
        {response && <p className="success">{response}</p>}
      
      </form>
     
     
    </div>
  );
};

export default EmailForm;
