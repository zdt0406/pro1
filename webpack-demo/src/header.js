let dom = document.getElementById('root');
function Header(){
    let header = document.createElement('div');
    header.innerText ='header';
    dom.append(header);
}
module.exports= Header;