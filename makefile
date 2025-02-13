IMAGE:=docker.io/brianwolf94/portfolio-noelia-v2:latest


build b:
	docker build . -t $(IMAGE)


run r:
	docker run -it --rm -p 8080:80 $(IMAGE)


push p:
	docker push $(IMAGE)