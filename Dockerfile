FROM node:16-alpine

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

FROM node:16-alpine

WORKDIR /app

COPY --from=0 /app/package.json ./
COPY --from=0 /app/yarn.lock ./

RUN yarn install --prod

COPY --from=0 /app/build ./

EXPOSE 3000
CMD ["node", "./index.js"]
