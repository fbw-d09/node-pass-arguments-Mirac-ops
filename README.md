# Star Wrapper
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


⭐ Make stars appear in your terminal! ⭐

## What you will be doing

You will be writing a CLI application which will make a row of stars appear before and after a string input.

This program should accept 2 arguments, in the following order;

- the **number** of stars to print on each row
- the **string** to be wrapped inside the rows of stars

### Example

###### Command
```bash
$ node solution.js 12 Sonnenschein
```

###### Response
```bash
************
Sonnenschein
************
```

## Tasks

### Task 1

1. Create the file `stars.js`
2. Inside this file, write a function that takes 2 arguments;
   - the **number of stars**
   - the **string** of text to display

### Task 2

1. Inside your function, and using `console.log()`, print 3 lines of text;

   - **Line 1** - Should be a row of stars - the number of stars must equal the number received into the function
   - **Line 2** - The text
   - **Line 3** - Same as line 1

2. If no **number of stars** are passed to the function, the function should use **10** as the default number
3. If no **string** is passed into the function, the function should use **"hi"** as the default string
4. Export your function as **default export (esm)**

## Task 3

1. Create the file `solution.js`
2. Import the function you created in `stars.js`
3. Read the arguments from the terminal with `process.argv` and run the function you just imported, passing in those arguments

## Task 4

Test your program in the terminal, by running the command

```bash
node solution.js 12 Sonnenschein`
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. File

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | file `stars.js` exists |

### 2. Function

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | file `stars.js` has default export |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | file `stars.js` exports function |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | exported function takes 2 arguments and prints output based on arguments |

### 3. Import

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | file `solution.js` exists |

### 4. Output

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | program creates correct output based on passed arguments |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Node-PassArguments)


[//]: # (autograding info end)