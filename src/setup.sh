#!/bin/sh

git config --global user.name  $PLAY_REACT_GIT_NAME
git config --global user.email $PLAY_REACT_GIT_EMAIL

cd ~/prj
git clone git@github.com:yanqirenshi/play.React.git
