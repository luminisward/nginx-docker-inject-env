## nginx-docker-inject-env

Inject env on client side at runtime

### Example

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
