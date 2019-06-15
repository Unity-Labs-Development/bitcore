#!/bin/bash
sudo docker login --username=josh.rogers.node@outlook.com --password=Rcx6cG7a1Bh4 registry-intl.cn-hongkong.aliyuncs.com

sudo docker tag bitcore-node:latest registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-node:latest
sudo docker push registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-node:latest

sudo docker tag bitcore-nginx:latest registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-nginx:latest

sudo docker push registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-nginx:latest



