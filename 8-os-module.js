// Built-In modules -> OS

const os = require("os");

// Info abot current user
const user = os.userInfo();
console.log(user);

// Method  returns the system uptime un seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
