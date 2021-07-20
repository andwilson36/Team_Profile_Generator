[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Team_Profile_Generator
Command-line application that will generate a profile for an entire software engineering team. This will take in information from the command line then create a HTML file with each team member having their own card and displaying their information.

## Table of Contents

**[Instructions](#Instructions)**<br>
**[Objectives](#Objectives)**<br>
**[Media](#Media)**<br>
**[License](#License)**<br>

## Instructions

This is a step-by-step walk-through of how to work the command line to get the result you want.
Make sure to press the enter key after every input to go to the next prompt.

### Start
```
node index.js
```

```
Name of manager
```

```
Manager's employee ID
```

```
Manager's email address
```

```
Manager's office number
```
### Engineer
```
Engineer's name
```

```
Engineer's employee ID
```

```
Engineer's email
```

```
Engineer's GitHub username
```
### Intern
```
Intern's name
```

```
Intern's employee ID
```

```
Intern's email
```

```
Intern's GitHub username
```
### End
After creating a employee you can select the 'finish team' option from the menu to stop taking input and return the HTML profile.
```
Finish team
```
You can also refer to the [media](#Media) section for a video demo.

## Objectives

```
✔️ Prompts user for imformation to be entered about certain employee.

✔️ Tests the employee objects to return data entered.

✔️ Creates a HTML file baised on the information entered by user.

✔️ File structure is organized and HTML file generated goes into folder with css.

✔️ Makes a link for the users GitHub account and opens email with the employees email in the 'To' section.
```

## Media
This is a short video on how to use the application:

https://user-images.githubusercontent.com/71351474/126408613-ccaecb15-021b-4f95-add1-280265463ed4.mp4

This snippet shows how after making a employee it prompts a menu and will navigate the user to where they selected. 
![](/images/prompt_menu.png)

This snippet shows the objects being shifted out of the array and the cards being put in the HTML file.
![](/images/array.png)

## License
The source code is licensed under MIT.
