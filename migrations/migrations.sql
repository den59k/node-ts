CREATE EXTENSION pgcrypto;

CREATE TABLE users (
	id serial PRIMARY KEY,
  name text,
	login text,
	password bytea,
	last_login_time bigint
);

CREATE UNIQUE INDEX ON users (lower(login));

CREATE TABLE refresh_tokens (
	user_id int,
	token text PRIMARY KEY,
	timestamp bigint
);