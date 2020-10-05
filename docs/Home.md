---
id: Home
slug: pages_home
title: Home
---

Here is a list of all the components of the Home page

## Upload

Used to upload quizzes, either drag and drop on the region or click to select files. Only JSON and YAML files are supported at the moment.

## ProblemLogs

Shows all the errors and warnings found while parsing the quizzes uploaded.

Each problems contains the following parts:-

01. Quiz name
02. the question number
03. type of problem (either error or warn)
04. the actual problem

Click [here](http://devorein.github.io/reinforz-docs/docs/parsing) to learn more about the file parsing process and what counts as error.

## Upload List

This list contains all the uploaded quizzes and a bit of information regarding the number of questions of the quiz. You can remove any/all of the quizzes and only the **checked quizzes** can be played. By default when you upload any quiz it gets selected.

## Play Tables

Three tables containing information about the questions of the uploaded quizzes.

01. Difficulty Based Table: Shows the number of questions based on its difficulty
02. Type Based Table: Shows the number of questions based on its type
03. Time Allocated Based Table: Shows the number of questions based on its time allocated

## Play Settings

This component is used to configure various settings related to the game itself.

It contains two parts:-

1. Options: Used to configure the game related settings
  1. **Shuffle Options**: If enabled, shuffles the options of the questions
  2. **Shuffle Quizzes**: If enabled, shuffles the order of the quizzes, but doesnt change the order of the question, by default it respects the upload order
  3. **Shuffle Questions**: If enabled, shuffles the order of the questions for each quiz, without changing the order of the quizzes
  4. **Instant Feedback**: If enabled, shows the total correct after completing each question
  5. **Flatten Mix**: If enabled, completely shuffles all the questions and quizzes, without respecting the order of any of them. Checking this disables the Shuffle Quizzes and Shuffle Questions options as they will be shuffled in this mode.

:::note
If only one quiz is uploaded, the shuffle quiz option is disabled
:::

2. Filters: Used to filter the uploaded quizzes questions based on various criterias to

   1. Time allocated: Filters the questions whose time_allocated are within this time range
   2. Excluded Difficulty: Excludes questions based on its difficulty.
   3. Excluded Type: Excludes questions based on its type.