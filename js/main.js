const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += characters[Math.round(Math.random() * (characters.length - 1))];
  }
  return str;
}

key = generateKey(16, characters);
console.log(key);
