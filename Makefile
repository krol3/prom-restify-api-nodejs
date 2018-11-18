.PHONY: build run down help
.DEFAULT_GOAL := help

help:
	@echo  "build:              Build the images "
	@echo  "up:                 Run the containers"
	@echo  "down:               Delete the containers"

build:
	docker build -t krol/prom-restify-api:dev .

push:
	@echo "[+] Push image"
	#docker login -u krol
	docker push krol/prom-restify-api:dev

run:
	docker run -it -p 3001:8080 krol/prom-restify-api:dev
