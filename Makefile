WEBPACK = ./node_modules/.bin/webpack
YARN = ./node_modules/.bin/yarn

all: build start

dev: build-dev start

build:
	echo '\nBuilding production version\n';
	$(WEBPACK) -p;

build-dev:
	echo '\nBuilding development version\n';
	$(WEBPACK);

start:
	$(YARN) start;
