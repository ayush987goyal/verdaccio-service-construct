FROM verdaccio/verdaccio:5.2.0

COPY ./config.yaml /verdaccio/conf/config.yaml
COPY ./start.sh /verdaccio/start.sh

USER root

CMD ["/bin/sh", "-c", "/verdaccio/start.sh"]
