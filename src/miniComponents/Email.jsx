import { useState } from 'react';
import { send } from 'emailjs-com'
import '../App.css';

export const Email = () => {
    

const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_lpcpkrm',
      'template_d37jmne',
      toSend,
      'Y3qoR0_GpiqTFrksx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  



  return (
    <div className="email">
      <br/>
      <br/>
      <form onSubmit={onSubmit}>
  <input
    type='text'
    name='from_name'
    placeholder='Your Name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <br/>
  <br/>
  <input
    type='text'
    name='to_name'
    placeholder='Type "Alex" Here'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <br/>
  <br/>
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <br/>
  <br/>
  <input
    type='text'
    name='reply_to'
    placeholder='Your Email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <br/>
  <br/>
  <button type='submit' >Submit</button>
</form>
    </div>
  );
}