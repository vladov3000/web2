<div class="main-content">

This explains how to create a website using node.js and express on MacOS. By the end of this tutorial, you should have a website hosted on a local machine. Credits to [Ben Gourley](https://github.com/bengourley) for the original code.

# Making the Website

2.  Clone this project from github [here](https://github.com/vlad-the-EPIChacker/web1).  
    `git clone https://github.com/vladov3000/web1`
3.  Install node.js using homebrew  
    `brew install npm`
4.  Install express and a logger(morgan) using npm  
    `npm i --save express@4 morgan@1`
5.  Install jade(html template language) and stylus(css template language) for our front end of the website  
    `npm i --save jade@1 stylus@0`
6.  Install nodemon so we can see our changes to the website live  
    `npm install -g nodemon`

# Changing the Website

9.  Run `npm init` to initialize your website. Enter all the information it asks for. If you need to change it later, edit the package.json file.
10.  Build the website `npm run build`
11.  Run `np run watch` and open [http://localhost:3000](http://localhost:3000) to watch your website update live (you have to save your files for it to update).
12.  Edit homepage.jade or any other template ending in -page.jade to change the html of that page. Edit defualt.jade to change the the taskbar or other elements present on every page.
13.  Edit index.style to edit the css classes of the website. Do NOT edit the index.css file, because the file regenerates, discarding all changes, everytime the css is built.

# Locally hosting the website

</div>
