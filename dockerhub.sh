#!/bin/bash
sudo docker login --username=josh.rogers.node@outlook.com --password=Rcx6cG7a1Bh4 registry-intl.cn-hongkong.aliyuncs.com

sudo docker tag bitcore-node:pon-v1.0.0 registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-node:pon-v1.0.0
sudo docker push registry-intl.cn-hongkong.aliyuncs.com/vgo/bitcore-node:pon-v1.0.0

sudo docker tag insight-previous-nginx:pon-v1.0.0 registry-intl.cn-hongkong.aliyuncs.com/vgo/insight-previous-nginx:pon-v1.0.0
sudo docker push registry-intl.cn-hongkong.aliyuncs.com/vgo/insight-previous-nginx:pon-v1.0.0



