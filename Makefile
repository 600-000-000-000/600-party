.PHONY: install compile build test run dev clean

IMAGE_NAME = 600-party
CONTAINER_NAME = 600-party
PORT = 6009

install:
	npm install

compile:
	node build.mjs

build: compile
	docker build -t $(IMAGE_NAME) .

test:
	npm run test:e2e

run:
	@echo "Restarting container..."
	docker stop $(CONTAINER_NAME) 2>/dev/null || true
	docker rm $(CONTAINER_NAME) 2>/dev/null || true
	docker run --restart always -d --name $(CONTAINER_NAME) -p $(PORT):80 $(IMAGE_NAME)
	@echo "Container $(CONTAINER_NAME) is running at http://localhost:$(PORT)"

dev:
	python -m http.server $(PORT)

clean:
	rm -rf dist node_modules playwright-report test-results
