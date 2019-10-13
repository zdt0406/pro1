let avatar = require('./1.png');
let img = new Image();
img.src = avatar;
img.classList.add(avatar);
let root = document.getElementById('root');
root.append(img);

module.exports= Image;