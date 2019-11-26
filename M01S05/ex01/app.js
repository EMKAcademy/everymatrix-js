
function getTime() {
var hours =  (new Date()).getHours();
var minutes =  (new Date()).getMinutes();
var seconds =  (new Date()).getSeconds();
var ms =   (new Date()).getMilliseconds();

return `${hours}:${minutes}:${seconds}:${ms}, am ajuns la Everymatrix`;
}
// console.log (
//   (new Date()).getHours() + ':' +
//   (new Date()).getMinutes()+':' +
//   (new Date()).getMinutes() + ':' +
//   (new Date()).getMilliseconds(),
//   'Am ajuns la EveryMatrix'
// )