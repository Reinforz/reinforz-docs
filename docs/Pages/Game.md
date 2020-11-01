---
id: Game
slug: game
title: Game
---

This page is the main page where you play the quiz(zes).

The game page contains the following components

#### Stats

Contains stats regarding the current question, including:-

1. Quiz title
2. Quiz subject
3. Total correct (If instant feedback was checked)
4. Current Question
5. Total Questions
6. Type of the question
7. Format of the question
8. Weight of the question
9. Time allocated for the question
10. Difficulty of the question

#### Question

The question container which changes based on the type of question

Question is created based on the following rules:

01. For Code questions, a text highlighter, syntax highlighted through prism is displayed

   1. For FIB, the blanks are embedded directly in the question code
   2. For other types just a simple syntax highlighter is used

02. Otherwise its passed through a md->html converted and sanitized

   1. For FIB, the blanks are embedded directly in the question text
   2. For other types just a question is displayed

:::note
Each question can contain images as well, in that case both the question and image are displayed side by side
:::

## Answers/Options

1. For MS and MCQ types all the options are displayed
  1. If the options are using code format modifier then its syntax highlighted
  2. Otherwise all valid md are valid options and passed through the same pipeline as the questions
2. For Snippet type a textfield is shown to type the single answer
3. For FIB type there are no answer or options textfield as they are embedded directly into the question