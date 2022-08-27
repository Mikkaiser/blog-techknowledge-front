#BUILD STAGE
FROM node:16.15-alpine3.16 as build

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build --prod

CMD [ "npx json-server -H 0.0.0.0 -p 3000 -w src/app/modules/shared/mocks/post-mocks.json" ]
#NGINX STAGE
FROM nginx:1.22.0-alpine

VOLUME /var/cache/nginx

COPY --from=build /usr/src/app/dist/blog-techknowledge-front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443 2015

