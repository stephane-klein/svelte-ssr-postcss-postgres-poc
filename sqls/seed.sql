\echo "Schema creating..."

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;

SET client_min_messages TO WARNING;

CREATE TABLE public.users (
  id                 UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username           VARCHAR NULL UNIQUE,
  email              VARCHAR DEFAULT NULL,
  password_hash      VARCHAR DEFAULT NULL,

  created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);

\echo "Schema created"
