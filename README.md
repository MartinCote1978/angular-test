# angular-test

Test coding in AngularJS with all the related tools required to run this kind of coding...



## Use of **Modern** Frontend

This project uses modern frontend tools and techniques. It is assumed a developer has at least baseline knowledge of the current tools in existence. 

At first, it is based on Node.js/npm:

* [Node.js](https://nodejs.org/en/)

Then, these tools include Node/npm-based tools:

* [Bower](http://bower.io/)
* [Grunt](http://gruntjs.com/)
* [Karma](http://karma-runner.github.io/0.12/index.html)

JavaScript code quality tools:

* [JSHint](http://jshint.com/docs/)
* [JSCS](http://jscs.info/)

Also important is using proper Angular coding conventions like the [Angular Style Guide](https://github.com/johnpapa/angular-styleguide). This approach is also [recommended by Angular team](http://angularjs.blogspot.ca/2014/02/an-angularjs-style-guide-and-best.html).

*__Note:__ The development machine should have Node/npm installed and have Bower and Grunt CLI installed globally. Once Node is installed run `> npm install -g bower grunt-cli`. (You may need to use sudo before the command.)*



## Project Folders

* **src/** — Contains the application source code (`src/Apps/`)

* **apps/** — Contains the code that gets compiled into a native app. Grunt builds files inside of `apps/Apps/`.

* **e2e/** — End-to-end [Protractor](https://angular.github.io/protractor/#/) tests

* **grunt/** — Individual Grunt build tasks

* **resources/** — For things that may be needed in the application during development but not part of the application code, such as mock data.



## Project Configuration Files

* **README.md** — This is the ideal place to store documentation for the current folder (and at the project, documentation for the project.)

* **package.json** — Contains list of project dependencies (like Node-based tools like Bower and Karma), and information about the project name and version.

* **bower.json** — Contains list of client-side dependecies (i.e. AngularJS, JQuery, etc.)

* **.bowerrc** — Bower configuration file. Tells Bower where to place downloaded dependencies.

* **gruntfile.js** — The build configuration file. (Similar to pom.xml or build.xml)

* **.gitignore** — List of files that should not be committed to Git source control.

* **.jshintrc** — Configuration for the [JSHint](http://jshint.com/docs/) JavaScript code quality tool.

* **.jscsrc** — Configuration for the [JSCS](http://jscs.info/) code style verification tool.

* **karma.conf.js** — Configuration for the [Karma](http://karma-runner.github.io/0.12/index.html) JavaScript testing tool.


## Project Setup

To setup the project on a development machine.

**Install npm**

* Follow the instructions at [Nodejs.org](https://nodejs.org/en/) to install the Node.js and npm tools.

**Install npm development tools**

From the command line at the root of the project run:

```
> npm install
```

**Install client-side libraries**

From the command line at the root of the project run:

```
> bower install
```

Note: if either of npm or bower do not install all dependencies properly, try running `npm cache clean` or `bower cache clean`.

**Build Frontend**

Once all tools are installed (i.e. downloaded) build client-side code. From the command line at the root of the project run:

```
> grunt
```


### Running the server and testing that it works

**Run the serve**

To run server in dev mode (which also watches files)

```
> grunt serve
```

or to run in production mode

```
> grunt serve:dist
```

**Test that it works!**

The browser (Chrome) should automatically open a localhost (port 9000 for dev mode, 3000 for production). If not, go to http://localhost:{port}
