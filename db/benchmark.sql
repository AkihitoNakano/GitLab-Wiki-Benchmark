-- Up Migration

CREATE TABLE IF NOT EXISTS benchmark (
	id INTEGER PRIMARY KEY,
	title VARCHAR(20) NOT NULL,
	body TEXT NOT NULL,
	create_by VARCHAR(10) NOT NULL,	
	created_at TIMESTAMP NOT NULL DEFAULT (now()),
	updated_at TIMESTAMP NOT NULL DEFAULT (now())
);

-- Down Migration

DROP TABLE IF EXISTS benchmark;