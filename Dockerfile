
FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./package.json
COPY ./build/* ./public/ 

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g 

COPY . . 
CMD ["npm", "start"]
