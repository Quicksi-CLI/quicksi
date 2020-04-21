.PHONY: help

PROJECT = <%= projectName %>
VERSION ?= $(shell git show --quiet --format="%cd-%h" --date=short)
SERVICE ?= backend
IMAGE ?= ${PROJECT}/${SERVICE}
ENVIRONMENT ?= development
BACKEND_IMAGE = ${PROJECT}/backend
FRONTEND_IMAGE = ${PROJECT}/frontend
# Used for `make up` when specifying a service, e.g. `make up frontend`
LASTWORD = $(lastword $(MAKECMDGOALS))

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' ${MAKEFILE_LIST} | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

version: ## Print version of app; used for tagging docker images
	@echo "${VERSION}"

# Executed only when starting `make up` the first time:
.env:
	cp .env.example .env

up: .env ## Start local dev environment with docker-compose; specify service via `make up frontend`
	docker-compose -p "${PROJECT}" build --pull
	@if [[ "${LASTWORD}" != "up" ]]; then \
		docker-compose -p "${PROJECT}" up --force-recreate ${LASTWORD}; \
	else \
		docker-compose -p "${PROJECT}" up --force-recreate; \
	fi

down: ## Teardown local dev environment with docker-compose
	docker-compose -p "${PROJECT}" down --volumes --remove-orphans

build: ## Build docker image; e.g. `make build -e SERVICE=backend`
	@docker build \
		--force-rm --pull --no-cache \
		-t ${IMAGE}:${VERSION} \
		-f ${SERVICE}/Dockerfile \
		--target release \
		${SERVICE}

test: frontend-tests backend-tests

frontend-tests:
	@docker-compose -p "${PROJECT}_${VERSION}_frontend_tests" -f docker-compose.ci.yml build frontend-tests
	@docker-compose -p "${PROJECT}_${VERSION}_frontend_tests" -f docker-compose.ci.yml run --rm frontend-tests
	@docker-compose -p "${PROJECT}_${VERSION}_frontend_tests" -f docker-compose.ci.yml down -v --remove-orphans

backend-tests:
	@docker-compose -p "${PROJECT}_${VERSION}_frontend_tests" -f docker-compose.ci.yml build backend-tests
	@docker-compose -p "${PROJECT}_${VERSION}_backend_tests" -f docker-compose.ci.yml run --rm backend-tests
	@docker-compose -p "${PROJECT}_${VERSION}_backend_tests" -f docker-compose.ci.yml down -v --remove-orphans
