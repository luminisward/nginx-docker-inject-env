FROM node:16 AS build

WORKDIR /app
COPY . ./

RUN yarn install --frozen-lockfile && yarn build


FROM nginx:alpine

ENV ASSETS_PUBLIC_PATH=0
ENV ASSETS_DIR=/assets

RUN sed -i '1s/^/load_module modules\/ngx_http_js_module.so;\n/' /etc/nginx/nginx.conf

COPY --from=build /app/lib /njslib
COPY ./default.conf.template /etc/nginx/templates/default.conf.template
