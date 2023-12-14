from node

run mkdir /app

workdir /app

add frontend /app

add fullchain.pem /app

add privkey.pem /app

run npm install

run npm run build

run npm install -g serve

CMD [ "serve", "-s", "build", "--ssl-cert", "fullchain.pem", "--ssl-key", "privkey.pem" ]