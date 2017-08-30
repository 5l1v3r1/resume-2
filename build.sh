
rimraf dist
ng build –prod –aot
docker build -t resume .
docker tag resume steharris/resume:latest
docker push steharris/resume:latest
