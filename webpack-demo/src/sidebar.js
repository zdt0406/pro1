let dom = document.getElementById('root');
function Sidebar (){
    let sidebar = document.createElement('div');
    sidebar.innerText ='sidebar';
    dom.append(sidebar);
}
module.exports = Sidebar;