#!/bin/bash
rimraf dist && webpack --config config/webpack.prod.js --progress --profile --bail
docker build -t resume .
docker tag resume steharris/resume:latest
docker push steharris/resume:latest
