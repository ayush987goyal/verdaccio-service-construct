#!/bin/sh

# Create htpasswd file from the secret
echo $HTPASSWD > /verdaccio/conf/htpasswd

# Start Verdaccio. Ref: https://github.com/verdaccio/verdaccio/blob/v5.2.0/Dockerfile
node -r ./.pnp.js \
      $VERDACCIO_APPDIR/bin/verdaccio \
      --config /verdaccio/conf/config.yaml \
      --listen $VERDACCIO_PROTOCOL://0.0.0.0:$VERDACCIO_PORT \
      "$@"
