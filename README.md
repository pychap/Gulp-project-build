## For Lynda.com workflow - Gulp Git tutorial.
1.  previous items placeholder here
2.  Install gulp: `sudo npm install -g gulp`
3.  In workflows folder (main root folder), installed dev gulp `sudo npm install --save-dev gulp`   
4.  in same folder, create `gulpfile.js`  This tells gulp what to do when it runs. See gulpfile for details to add.
5.  Same root install `sudo npm install --save-dev gulp-util`
6.  Install plugin to tell gulp to process our coffee files `sudo npm install --save-dev gulp-coffee`
7.  run `gulp coffee`  
8.  Javascript to take rest of scripts and push to development folder to a single file via `gulp-concat` `sudo npm install --save-dev gulp-concat` add variable to `gulpfile.js` - `concat = require('gulp-concat')` - see file. Set up sources, create var - `jsSources`
