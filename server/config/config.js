process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


let urlBD;

if (process.env.NODE_ENV === 'dev') {
  urlBD = 'mongodb://127.0.0.1:27017/shop?compressors=zlib&readPreference=primary&gssapiServiceName=localhost&appname=MongoDB%20Compass%20Community&ssl=false';
} else {
  urlBD = 'mongodb+srv://falicona:mM97062755@cluster0-knfja.mongodb.net/shop?retryWrites=true&w=majority'
}
process.env.URLDB = urlBD;
// function parseJwt (token) {
//   var base64Url = token.split('.')[1];
//   var base64 = base64Url.replace('-', '+').replace('_', '/');
//   return JSON.parse(window.atob(base64));
// };