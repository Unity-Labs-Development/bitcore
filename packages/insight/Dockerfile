FROM node:carbon as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build






FROM nginx:1.9

COPY nginx/certs /etc/nginx/certs
COPY nginx/conf.d /etc/nginx/conf.d
COPY --from=builder /usr/src/app/www /usr/share/nginx/html
