const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved from user ${name} and id number is ${id} `);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "john", 32);
