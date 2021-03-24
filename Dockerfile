FROM nginx:1.17

COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /code

RUN npm install && npm run build

COPY ./dist .

EXPOSE 8080:8080

CMD ["nginx", "-g", "daemon off;"]