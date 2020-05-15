server-app/node_modules:
	cd server-app && npm install

ui-app/node_modules:
	cd ui-app && npm install

.PHONY: run-server
run-server: server-app/node_modules
	cd server-app && npm start

.PHONY: run-ui
run-ui: ui-app/node_modules
	cd ui-app && npm start

.PHONY: test-server
test-server: server-app/node_modules
	cd server-app && npm test

.PHONY: test-ui
test-ui: ui-app/node_modules
	cd ui-app && npm test
