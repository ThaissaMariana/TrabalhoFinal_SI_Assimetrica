const NodeRSA = require('node-rsa');

const key = new NodeRSA({b: 512});  
const publicKey = key.exportKey('public');  
const privateKey = key.exportKey('private');  

console.log("Chave Pública:", publicKey);
console.log("Chave Privada:", privateKey);

const mensaorigi = "Minha mensagem secreta!";  

const mensacrip = key.encrypt(mensaorigi, 'base64');
console.log("Texto Criptografado:", mensacrip);

const mensadescri = key.decrypt(mensacrip, 'utf8');
console.log("Mensagem Descriptografada:", mensadescri);

if (mensaorigi === mensadescri) {
  console.log("A mensagem foi descriptografada com sucesso!");
} else {
  console.log("Falha na descriptografia!");
}
