from node

run mkdir /app

workdir /app

add frontend /app

run npm install

run npm run build

run npm install -g serve

CMD [ "serve", "-s", "build" ]