# Svelte + SSR + PostgreSQL

```sh
$ docker compose up -d postgres
$ ./scripts/seed.sh
$ ./scripts/fixtures.sh
$ yarn install
$ yarn run dev
```

Go to http://127.0.0.1:3000/

## Test build version

```
$ docker compose build
$ docker compose up -d
```

Go to http://127.0.0.1:3000/
