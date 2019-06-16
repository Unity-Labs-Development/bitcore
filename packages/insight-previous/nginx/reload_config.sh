#!/bin/sh

set -e

## reload config
docker exec -it nginx /etc/init.d/nginx reload
