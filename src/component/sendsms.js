import React from 'react';
import twilio from 'twilio';

const TwilioSMS = () => {
  const handleSendSMS = async () => {
    const accountSid = 'AC443d6d637ec1c815b044c077b0289f10';
    const authToken = '59dafda8fb112f2dcb71195465476023';
    const client = twilio(accountSid, authToken);

    try {
      const message = await client.messages.create({
        body: 'Hello from Twilio!',
        from: '+918511926953',
        to: '+917600987119'
      });
      console.log('SMS sent successfully. SID:', message.sid);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <div>
      <h1>Twilio SMS Example</h1>
      <button onClick={handleSendSMS}>Send SMS</button>
    </div>
  );
};

export default TwilioSMS;