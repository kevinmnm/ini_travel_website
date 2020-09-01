# **Initravel Website**

## Table of Contents
- [ Description ](#desc)
- [ Resources ](#resources)

<a name="desc"></a>
## Description
This project is an Indonesia Travel Guide website built with Vue.js. This website isn't necessarily focused on its descriptive contents, but the UI/UX & functionalites that a website should be acquainted with. Below is a list of some functionalites implemented to this project.
- Responsive design.
- Lazy loading for faster page loads.
- User account creation (Firebase).
- Route guard.
- Scroll behavior.
- 3rd party provider log-in with Google, Facebook, etc.
- Email verification.
- Real-time data (AJAX API).
- Database to store user data (Firebase).

<a name="resources"></a>
## Resources
- Vue.js
  - Vue CLI
  - Vue Router (History Mode)
  - Vue Transition & Animation
- Firebase
  - Authentication
  - Cloud Firestore
  - Cloud Storage
- Canva
   - Logo & Images

<a name="bug_fix"></a>
## Bug Fix
This project took me about 10 days to complete. During the development period, a large amount of time was spent for some unfamiliar bug fixes. Among many bugs I faced, there are 2 marjor bugs I experienced with this project that took **arduous** amount of debugging.

**1) Apache Server Configuration**

As I'm using `Router History Mode`, and as this project is hosted through Hostinger under my main (portfolio) website, I needed to configure `publicPath` to indicate server fallback to `index.html`. This new concept wasn't too much of a hassle as I followed [Vue deployment documentation](https://cli.vuejs.org/guide/deployment.html#deployment) to add vue.config.js.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
