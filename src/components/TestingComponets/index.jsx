// import React, { useState, useEffect } from 'react';
// import { testFileUpload } from '../../api/Api_Catalog';
// const Parse = require('parse');

// export const TestingComponets = () => {
//   const [iFiles, setIFiles] = useState('');
//   Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
//   Parse.initialize(
//     'JyNI4FEFowGSVq5CwSQAnroQmm7XARwiGJzJSXof', // This is your Application ID
//     '1f2cHhK6V2ejt0W6zjZJsvp6IeWnchwrPbxW8UuB', // This is your Javascript key
//   );

//   const getFiles = (e) => {
//     let reader = new FileReader();
//     reader.onload = (ev) => setIFiles(ev.target.result);
//     reader.readAsDataURL(e.target.files[0]);
//   };

//   const sendFiles = async () => {
//     const CompanyPhoto = Parse.Object.extend('CompanyPhoto');
//     const myNewObject = new CompanyPhoto();

//     myNewObject.set('whoCreate', Parse.Object('Et1GObuKjZ'));
//     myNewObject.set('image', new Parse.File('1.png', { base64: iFiles }));
//     // myNewObject.set('text', 'A string');

//     myNewObject.save().then(
//       (result) => {
//         if (typeof document !== 'undefined') console.log('CompanyPhoto created', result);
//       },
//       (error) => {
//         if (typeof document !== 'undefined')
//           console.error('Error while creating CompanyPhoto: ', error);
//       },
//     );
//   };

//   return (
//     <div>
//       <h1>I test</h1>
//       <input type="file" name="files" id="" onChange={(e) => getFiles(e)} />
//       <button type="button" onClick={() => sendFiles()}>
//         SEND
//       </button>
//     </div>
//   );
// };
