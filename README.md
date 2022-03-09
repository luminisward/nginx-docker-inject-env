## nginx-docker-inject-env

Inject env on client side at runtime

### Usage

#### inject public env

```
environment:
    - PREFIX=VUE_APP
    - NAMESPACE=env
    - VUE_APP_VERSION=1.2.3
    - REACT_APP_SECRET=abc # will not be injected because prefix not match
```

will append a script in the `/index.html` head tag

```
<script>window.env={"VUE_APP_BASE_API":"1.2.3"}</script>
```

#### redirect assets

```
environment:
    - ASSETS_DIR=/static # default value is /assets
    - ASSETS_PUBLIC_PATH=https://static.mydomain.com # won't redirect if not set
```

request `/static/a.png` will redirect to `https://static.mydomain.com/a.png` with 302
