# Specify a base image
FROM node:16

#Install some dependencies
WORKDIR /home/node/app
COPY ./ /home/node/app
RUN npm install
RUN sudo apt update \
        && sudo apt-get install -yq \
        libnss3 \
        libatspi2.0-0 \
        libatk-bridge2.0-0 \
        libcupsfilters1 \
        libxkbcommon0 \
        libasound2 \
        libxshmfence1 \
        libxrandr2 \
        libgbm1 \
        libxcomposite1 \
        libxdamage1

# Set up a default command
CMD [ "npm","start" ]