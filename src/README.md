## Organization of Code

The *src/Apps/* folder divides the code in 4 sections.

* `shared/`: This is application code common to both tablet and phone applications.

    * Any changes here affects both applications and both would need to be tested

    * Any bug fixes done here need to be tested in both applications

* `tablet/`: Code specific to only the tablet application.

* `phone/`: Code specific to only the smartphone application.



## Reason for placing code inside of the *Apps* subfolder

In this case the *src* folder contains only 1 subfoler which may seem redundant. This is for clarity as it better matches the file structure of the files after the Grunt build step.
