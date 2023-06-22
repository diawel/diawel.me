FROM node
WORKDIR /usr/src/app
COPY . .
RUN npm install && chown node -R node_modules