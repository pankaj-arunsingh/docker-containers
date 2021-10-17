FROM node:16 AS base

WORKDIR /usr/src/app

COPY . .


FROM base as test
RUN npm ci
RUN CI=true npm test

FROM test as prod
RUN npm ci --production
RUN CI=true npm run build

FROM nginx:1.20-alpine

ENV REACT_APP_BACKEND_URL=http://localhost:3000/

COPY --from=prod /usr/src/app/build /usr/share/nginx/html