---
id: Answers
slug: Answers
title: Answers
---

You can use T/F acronyme to expand to True and False to create a True/False options, make sure its either T or F

For questions of type Snippet and FIB, you can provide multiple alternates for the same blank, by using, separated items ie ans1, ans2

Each answer and its alternates can have certain modifiers which can help in certain cases where all the possible combinations of answers is not possible to write down

Modifiers can also be applied **globally** using (modifiers), which are applied to all the alternates rather than typing similar modifiers for all the alternates

Currently four modifiers are supported:

1. IC: Ignore Case: Ignore the case of the answer (all caps, all lowers, first caps and rest lower). eg _IC_ans1
02.  IS: Ignore Space: Ignore the spaces of the answer. eg: _IS_ans2
03.   REGEX: Test the answer using a regex
04.   FLAGS: Attach flags to the regex using this modifier eg FLAGS="gi"

eg: (IC IS)_REGEX_ans1, _REGEX FLAGS=gi_ans2