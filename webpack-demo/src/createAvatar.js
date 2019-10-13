function CreateAvatar(){
    let avatar = require('./1.png');
    let img = new Image();
    img.src = avatar;
    img.classList.add('avatar');
    let root = document.getElementById('root');
    root.append(img);
}
module.exports= CreateAvatar;

//通过构造函数的方法引入到另一个界面