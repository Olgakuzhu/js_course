
const moment = require('moment')
let happyDay = prompt("Введите дату в формате 20.05.2001 ", "");
let dateB = moment(happyDay);
let dateC = moment();
//console.log(dateC)
 result = dateB.diff(dateC, 'days');
 document.write(result)


