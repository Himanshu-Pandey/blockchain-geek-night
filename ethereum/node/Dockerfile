FROM golang:1.9.3-alpine AS builder

RUN apk update \
    && apk add --no-cache \
      wget make gcc musl-dev linux-headers git \
    && rm -rf /var/cache/apk/*

ENV ETHEREUM_VERSION=1.8.12

RUN wget https://github.com/ethereum/go-ethereum/archive/v${ETHEREUM_VERSION}.tar.gz \
		&& tar xvzf v${ETHEREUM_VERSION}.tar.gz \
		&& cd go-ethereum-${ETHEREUM_VERSION} \
		&& make geth \
		&& cp build/bin/geth /usr/local/bin

FROM alpine
ARG sha='HEAD'
LABEL vcs-ref=$sha

RUN apk update \
    && apk add --no-cache \
      supervisor bash \
    && rm -rf /var/cache/apk/*

COPY --from=builder /usr/local/bin/geth \
                    /usr/local/bin/
COPY . /data

COPY supervisord.conf /etc/upervisord.conf

WORKDIR /data

ENTRYPOINT /data/init.sh
CMD []

HEALTHCHECK --interval=5s --timeout=80s --retries=5 --start-period=30s CMD ["/data/health-check.sh"]
