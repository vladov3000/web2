FROM ubuntu
MAINTAINER vladov3000@gmail.com

RUN echo "0.1" > /version

VOLUME /web1 

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install tmux 
RUN apt-get -y install bash-completion 
RUN apt-get -y install git
RUN apt-get update
RUN apt-get -y install nodejs
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN apt-get -y install npm
RUN npm i --save express@4 morgan@1
RUN npm i --save pug  stylus@0
RUN npm install -g nodemon

EXPOSE 3000
WORKDIR /web1
ENTRYPOINT ["npm", "run","watch"]
