#!/bin/bash

aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 907221691199.dkr.ecr.ap-southeast-1.amazonaws.com
docker run -it -d -p 80:8080 907221691199.dkr.ecr.ap-southeast-1.amazonaws.com/docker_deploy:latest