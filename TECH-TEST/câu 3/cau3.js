const f = require('fs');

const filePath = 'data.json';
const data = f.readFileSync(filePath, 'utf8');

let jsonString = JSON.stringify(JSON.parse(data));

jsonString = jsonString.replace(/\s+/g, '');

const newFilePath = 'data_compressed.json';
f.writeFileSync(newFilePath, jsonString, 'utf8');

console.log('Dữ liệu đã được nén và ghi vào file:', newFilePath);
