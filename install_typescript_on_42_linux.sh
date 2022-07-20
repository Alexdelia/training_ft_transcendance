#!/bin/bash

mkdir ~/.npm-global

npm config set prefix '~/.npm-global'

touch ~/.zshrc
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc

npm install -g typescript
