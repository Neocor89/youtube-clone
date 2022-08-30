# youtube-clone Rapid API
![YouTube](https://img.shields.io/badge/YouTube-clone-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)

### web app built using 👷

<div style="display: flex; align-items: center; margin: 20px 0">
<img src="https://bitsrc.imgix.net/3b69976526d31a20a1fd238f5a32a704cf437dd6.png" style="width: 45px; height: 35px; margin-left: 20px" alt="image material UI"/>
<img src="https://avatars1.githubusercontent.com/u/14069567?s=280&v=4" style="width: 45px; height: 45px; margin-left: 20px;" alt="image material UI"/>
<img src="https://daviseford.com/blog/public/img/thumbnails/misc/react-logo.png" style="width: 45px; height: 45px; margin-left: 20px; object-fit: cover;" alt="image material UI"/>
</div>

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

after copying the dependencies, run the command :

```node
npm install --legacy-peer-deps
```

### `Launch the application`

```
npm run start
```
 ### `file and folder configuration`

After the app is launched <span style="color: #f08080">delete the current src folder</span>,
then <span style="color: #06d6a0">create a new src folder</span> 


### Imports All Components

Create an index.js file in the components folder and store all created components

```jsx
export { default as Navbar } from "./Navbar";
export { default as Feed } from "./Feed";
export { default as ChannelDetail } from "./ChannelDetail";
export { default as VideoDetail } from "./VideoDetail";
export { default as SearchFeed } from "./SearchFeed";
```
 

