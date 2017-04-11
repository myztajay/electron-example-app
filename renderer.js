// const os = require('os');
// const fs = require('fs');
//
// const files = fs.readdirSync(os.homedir());
//
// console.log(files);
//
// files.forEach(name => {
//   const file = document.createElement('li');
//   file.textContent = name
//   document.body.appendChild(file);
// })

const newLinkUrl = document.querySelector('#new-link-url');
const newLinkSubmit = document.querySelector('.new-link-form--submit');

newLinkUrl.addEventListener('keyup', ()=>{
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});
