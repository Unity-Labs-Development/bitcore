FROM nginx:1.9

# - "./lib/nginx/www:/usr/share/nginx/html:ro"
#       - "./lib/nginx/conf.d:/etc/nginx/conf.d:ro"
#       - "./lib/nginx/certs:/etc/nginx/certs:ro"

COPY certs /etc/nginx/certs
COPY conf.d /etc/nginx/conf.d
COPY ../www /usr/share/nginx/html



