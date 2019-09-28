// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
import React from 'react';
import { TextField } from './textField';

const accountSid = 'AC2b98c87ac694fd7d16a4cfa884fc182f';
const authToken = '0a3097a7c6952304d6c2b7bd087db785';
const client = require('twilio')(accountSid, authToken);

constructor(props){
	super(props);
}

let numbers = ["+17187906731", "+19292488824", "+19087051729", "+17345787411"]//, "+18565533414", "+19292488824"]
client.messages
  .create({
     body: 'Hi, this is Thanos app',
     from: '+17184006004',
     mediaUrl:['https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'],
     to: this.
   })
  .then(message => console.log(message.sid));