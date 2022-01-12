FROM nginx:alpine

RUN sed -i '1s/^/load_module modules\/ngx_http_js_module.so;\n/' /etc/nginx/nginx.conf

COPY ./lib /njslib
COPY ./default.conf /etc/nginx/conf.d/default.conf
