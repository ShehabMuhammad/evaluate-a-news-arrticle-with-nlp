# Evaluate-a-news-article-with-nlp
# Description
 ** evaluate-a-news-article-with-nlp is a project for the FWD web development udacity advanced nanodegree. In which there should be a web application that enables user to evaluate an article with NLP with the help of an external API **

# Table of contents
- [Description](#Description)
- [Table of contents](#Table-of-contents)
- [Technologies](#Technologies)
- [Author](#Author)
- [Credits](#Credits)
- [Usage](#Usage)
- [Testing](#Testing)
- [Notes](#Notes)

# Technologies
**Node.js**, **webpack** along with its loaders and packages, **Sass**, and vanilla **JavaScript**.
.

# Author
The author of the project is Shehab Muhammad

# Credits
Credits to all the tutors at udacity who helped me to learn many things that helped to a great extent.

# Usage

 Please make sure you have python 2 installed, Because **node-gyp** requires **Python 2**, and it’s needed for **node-sass** which was used during the course lessons, Secondly; make sure to install only the versions included in _package.json_ as the modules and dependencies are very sensitive towards each other’s versions. Other versions could have some breaking changes.

Saying that, You can jump-start the project by `npm install` then `npm run build-prod` to build the production version of the project or `npm run build-dev` to build the development version. Then `npm run start` would launch the production build at localhost:8081 location.
 
# Testing
You can test the project using **jest** with `npm run test`

# Notes

The course forbids us from exposing the API_KEY to the client, Also it instructs us to use a service worker to cache the site files to enable offline mode, However this means that the interaction with the external API functionality won’t be available at offline mode.

Also, I removed the env file, You’ll need to create another one that’ll contain your unique API key.
