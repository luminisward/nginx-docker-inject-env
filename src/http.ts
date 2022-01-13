function inject_env(
  r: NginxHTTPRequest,
  data: string,
  flags: NginxHTTPSendBufferOptions
) {
  const { PREFIX, NAMESPACE } = process.env;
  if (!PREFIX || !NAMESPACE) {
    r.sendBuffer(data, flags);
  } else {
    const env: Record<string, string> = {};
    Object.entries(process.env).forEach(([k, v]) => {
      if (k.startsWith(PREFIX)) {
        env[k] = v;
      }
    });
    r.sendBuffer(
      data.replace(
        `</head>`,
        `<script>window["${NAMESPACE}"]=${JSON.stringify(env)}</script></head>`
      ),
      flags
    );
  }
}

function remove_content_length(r: NginxHTTPRequest) {
  r.headersOut["Content-Length"] = undefined;
}

export default { inject_env, remove_content_length };
