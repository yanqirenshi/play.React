# ################################################################
#
#
#  Prior work
#  ==========
#   export PLAY_REACT_GIT_NAME="yanqirenshi"
#   export PLAY_REACT_GIT_EMAIL="yanqirenshi@gmail.com"
#
#  Build
#  =====
#   docker build -t play.react .
#
#  Run
#  ===
#   docker run -v ~/.ssh:/home/react/.ssh --env PLAY_REACT_GIT_NAME=$PLAY_REACT_GIT_NAME --env PLAY_REACT_GIT_EMAIL=$PLAY_REACT_GIT_EMAIL -it play.react /bin/bash
#
#  Start
#  ===
#   sh /home/react/tmp/setup.sh
#
# ################################################################

FROM debian:buster

MAINTAINER Renshi <yanqirenshi@gmail.com>


#####
##### Install Packages
#####
USER root

RUN apt update
RUN apt install -y build-essential
RUN apt install -y git
RUN apt install -y curl
RUN apt install -y emacs
RUN apt install -y nginx


#####
##### Make Group / User
#####
USER root

RUN groupadd react-users
RUN useradd -d /home/react -m -g react-users react


#####
##### Make User's Directory
#####
USER react
WORKDIR /home/react

RUN mkdir /home/react/prj
RUN mkdir /home/react/tmp
RUN mkdir -p /home/react/.emacs.d/dist


#####
##### nvm
#####
USER react
WORKDIR /home/react

SHELL ["/bin/bash", "--login", "-c"]

RUN curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
RUN nvm install 10.16.3 && nvm use 10.16.3


#####
##### Emacs
#####
USER react
WORKDIR /home/react/.emacs.d/dist

RUN git clone https://github.com/yanqirenshi/emacs.git

RUN touch /home/react/.emacs.d/init.el
RUN echo '(load "~/.emacs.d/dist/emacs/init-base.el")'  >> /home/react/.emacs.d/init.el

RUN emacs --script /home/react/.emacs.d/dist/emacs/src/package.el


#####
##### Start
#####
USER react
WORKDIR /home/react

COPY setup.sh /home/react/tmp/
