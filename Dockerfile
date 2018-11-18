FROM node:8-alpine

ENV NPM_CONFIG_LOGLEVEL info
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

ADD . /home/node/app/

COPY --chown=node:node package*.json /home/node/app/
RUN npm install
RUN npm install --save-dev nodemon

CMD [ "npm", "start"]
