run: ## docker fileを作成する
	 run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15.3-alpine

createdb: ## dbの作成
	docker exec -it postgres15 createdb --username=root --owner=root benchmark
