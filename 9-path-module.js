// Built-In modules -> PATH

const path = require("path");
console.log(path.sep);

const filePath = path.join("/content", "sub-folder", "test.txt");
console.log(filePath);

// To return only base file, Which is the 'test.txt' file in this case
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "sub-folder", "test.txt");
console.log(absolute);
