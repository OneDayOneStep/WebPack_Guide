import _ from "lodash";

//管理资源
import "./style.css"; //引入样式
import Logo from "./images/Webpack.png"; //引入图片文件
import XmlData from "./data.xml"; //引入xml文件

//管理输出
import printMe from "./print.js";

function component() {
    let newLogo = new Image();
    newLogo.src = Logo; // 设置图片路径为 import 的 Logo
    newLogo.style.verticalAlign = "middle";

    let btn = document.createElement("button");
    btn.innerHTML = "ClickMe & Watch Console";
    btn.onclick = printMe;

    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("styleCss");
    element.appendChild(newLogo);
    element.appendChild(btn);

    console.log(XmlData); //输出data.xml内容

    return element;
}
document.body.appendChild(component());