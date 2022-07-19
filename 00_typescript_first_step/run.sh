#!/bin/bash

echo "you need nodeJS and typescript"
sudo npm install -g typescript

echo "compile typescript to javascript"
tsc first_step.ts

echo "open html file"
xdg-open index.html
