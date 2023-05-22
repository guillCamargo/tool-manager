FROM node:18

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
RUN npm install -g typescript
RUN npm i -g sequelize-cli
RUN npm i -g nodemon

COPY . .

EXPOSE 3000

ENTRYPOINT [ "./startup.sh" ]