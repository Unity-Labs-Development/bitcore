# FROM bitcore-node
# CMD ["npm", "--prefix=./packages/insight", "start"]

FROM nginx:1.9

# - "./lib/nginx/www:/usr/share/nginx/html:ro"
#       - "./lib/nginx/conf.d:/etc/nginx/conf.d:ro"
#       - "./lib/nginx/certs:/etc/nginx/certs:ro"

COPY nginx/certs /etc/nginx/certs
COPY nginx/conf.d /etc/nginx/conf.d
COPY www /usr/share/nginx/html