.PHONY: clean
clean:
	rm -r dist/

.PHONY: build
build:
	parcel build src/ui/index.html

.PHONY: bootstrap
bootstrap:
	./bin/bootstrap.sh
