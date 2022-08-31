# youtube-clone Rapid API
![YouTube](https://img.shields.io/badge/YouTube-clone-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)

### web app built using

<div style="display: flex; align-items: center; margin: 20px 0">
<img src="https://bitsrc.imgix.net/3b69976526d31a20a1fd238f5a32a704cf437dd6.png" style="width: 45px; height: 35px; margin-left: 20px" alt="image material UI"/>
<img src="https://avatars1.githubusercontent.com/u/14069567?s=280&v=4" style="width: 45px; height: 45px; margin-left: 20px;" alt="image material UI"/>
<img src="https://daviseford.com/blog/public/img/thumbnails/misc/react-logo.png" style="width: 45px; height: 45px; margin-left: 20px; object-fit: cover;" alt="image material UI"/>
</div>

### **main page rendering** ⭐

---




<img src='Readme-assets\image-youtube-clone2.0.png'/>

## **SETUP**
---
### `vscode extension`

Download the vscode Rapid API extension and create account in [RapidAPI](https://rapidapi.com/)


### `Dependencies`

After initializing your project, copy these dependencies to your vscode terminal

```json
"dependencies": {
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/icons-material": "^5.8.4",
    "@mui/material": "^5.9.3",
    "axios": "^0.27.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-player": "^2.10.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^5.0.1"
  },
```

### `Durability application`

After copying the dependencies, run the command :

```node
npm install --legacy-peer-deps
```

### `Launch the application`

```
npm run start
```
 ### `Organizing file components`

### Centralization of imported components  😎

Create an index.js file in the **components** folder and store all created components

```jsx
export { default as Navbar } from "./Navbar";
export { default as ChannelDetail } from "./ChannelDetail";
export { default as VideoDetail } from "./VideoDetail";
...
```
accessing files from components

```jsx
import { Videos } from './';
```
---

## **API**  🖥️🔛🐙


### Using the public API 
**Youtube v3** from the Rapid API hub

`Create by` : [ytdlfree](https://rapidapi.com/user/ytdlfree) 🧑‍💻

For more information check [Rapid-API website](https://rapidapi.com/)

To use the API, extract the url in the interface, then retrieve your key and protect it in an **.env** file.

---
## **Deployment 🕺**


To deploy your application you can choose Netifly With [Netifly ⚡](https://app.netlify.com/) 

- Create an account on netifly and then head to the `sites` tab

- Create a file in your public folder named `_redirects`

```
public/_redirects
```

- And add this line to your file

```
/* /index.html 200
```
