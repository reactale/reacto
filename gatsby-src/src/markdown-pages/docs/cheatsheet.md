---
title: Cheatsheet
description: DateTime Reacto
path: cheatsheet
---

# Reacto Cheat Sheet

## Menu
- [Introduction](#introduction)
- [Reactos](#reactos)
- [Recipes]()


## Introduction
Reactos are small codes (Reactive Tokens) that can be used within normal texts to give them dynamic meaning. [Reacto](https://reacto.reactale.com) was developed as a helper project for [Reactale](https://reactale.com)


## Reactos

### Date / Time `((r.dt))`

- `((r.dt.date))`   yields today's date, a number only, e.g. 27

- `((r.dt.day))` yields current day's name in the week, e.g. Sunday

- `((r.dt.month))` yields current month, e.g. February

- `((r.dt.year))` yields current year, e.g. 2018

- `((r.dt.hour))` yields current hour in 12 hour format, e.g. 9

- `((r.dt.hour24))` yields current hour in 24 hour format, e.g. 21

- `((r.dt.min))` yields current minute, a number only, e.g. 18

- `((r.dt.sec))` yields current minute, a number only, e.g. 36



### Config `((r.cfg))`

- `((r.cfg.langSwitch.LLL))` Changes the language of Reactos to LLL (language short code, e.g. *en* for *English*, *beng* for *Bengali* etc)


### Variable `((r.var))`

- `((r.var.variableName = any_value))` Saves any value (number or text/multiline) for later use. *variableName* should be *alphanumeric*. 

- `((r.var.variableName))` yields the value of the variable (set either by user or system)

- `((r.var.variableName = text with r.var.otherVar))` Thus outer r.var can act like a template to be updated later


### Calc `((r.calc))`

- `((r.calc. n1 + n2))` Adds 2 numbers (or reacto vars)

- `((r.calc. r.var.v1 + r.var.v2))` Adds 2 numbers saved earlier in reacto vars

### If `((r.if))`

- `((r.if. value1 = value2 )) {{ ... }}` If value1 equals to value2 then whatever is inside {{ ... }} will get executed
