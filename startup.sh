#!/bin/sh

echo "Starting get ready!!!"
sequelize db:migrate
nodemon --legacy-watch ./src/server.ts