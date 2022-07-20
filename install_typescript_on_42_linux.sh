#!/bin/bash

mkdir ~/.npm-global

npm config set prefix '~/.npm-global'

touch ~/.profile
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile

npm install -g typescript
