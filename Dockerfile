FROM node:14.8.0-stretch


RUN  mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . /app 
EXPOSE 3000
CMD ["npm", "run", "dev"]