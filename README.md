<br />
<div align="center">
  <a href="https://github.com/ehabAbdelMawla/custom-react-electron-titlebar">
   <img src="https://user-images.githubusercontent.com/51888513/189550176-222575af-2ee1-4cd8-9d9d-bed66e88234b.png" width="350"  />
  </a>
  <h2 align="center">Custom React Electron Titlebar</h2>
  <p align="center">
   React Package Add Custom Title Bar To Electrons Apps 
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#built-with">Built With</a></li>
        <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
<p align="center">
 <img src="images/image.jpg"   />
 
  <p>Package Provide A Title Bar Component To View On Electron Apps</p>


## Built With
 <kbd><img src="https://user-images.githubusercontent.com/51888513/188966114-ac50454b-7d33-4985-98f9-231b6ecea713.png" width="18" style="border-radius:5px; margin:5px"/> </kbd> ReactJs <br/>

## Getting Started 
  
### Installation

```sh
npm install custom-react-electron-titlebar --save
```

# Usage

```js
import TitleBar from "custom-react-electron-titlebar"
..
..
..
render(){
  let options = {
            backgroundColor: "#000",
            iconsColor: "#FFF",
            title: "To Do List",
            titleColor: "#FFF",
            icon: true,
            closeIconClass: "fa fa-times",
            maximizeIconClass: "fa fa-square-o",
            minimizeIconClass: "fa fa-minus"
        }
return(<TitleBar options = { options }/>)}
```

# Props
| Prop Name  | Description | Type |
| ------------- | ------------- |------------- |
| backgroundColor  | background of titlebar | String |
| iconsColor | Color Of FontAwesome Icons | String |
| title  | Title Of Project | String |
| titleColor  | Color Of Project Title  | String |
| icon  | true Or false (get icon href from index.html)  | Boolean |
| closeIconClass  | fontAwesome class of close icon | String |
| maximizeIconClass  | fontAwesome class of maximize icon  | String |
| minimizeIconClass  | fontAwesome class of minimize icon  | String |



<!-- CONTACT -->
## Contact
<p align="center">
<a  href="mailto:eabdo1474@gmail.com">
 <img src="https://user-images.githubusercontent.com/51888513/188922645-da22d955-0b02-46d9-8145-564b54316d87.png" width="50"/> 
</a>
<a href="https://www.youtube.com/channel/UCnoe7bD7w2fWYlNzqY3qjLA">
<img src="https://user-images.githubusercontent.com/51888513/188924271-4554ab67-60b6-46db-9d38-b5d284bfc324.png" width="50"/>
</a>
<a href="https://www.linkedin.com/in/ehab-abdel-mawla-9b20aa183">
<img src="https://user-images.githubusercontent.com/51888513/188924356-4578aa1f-26c0-4310-a16d-f4eb3c891b8d.png" width="50"/>
</a>
<a href="https://codepen.io/ehabAbdelMola"><img src="https://user-images.githubusercontent.com/51888513/188924374-5169b372-1eda-4639-95b7-ceacbe31b861.png"   width="50"/> </a>
<a href="https://www.instagram.com/abdoehab4551/"><img src="https://user-images.githubusercontent.com/51888513/188924858-1b4bd316-4259-4f22-be15-0872c31ebc12.png"   width="50"/> </a>

</p>
