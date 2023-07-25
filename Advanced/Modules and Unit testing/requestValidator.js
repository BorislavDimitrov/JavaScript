const methods = ["GET", "POST", "DELETE", "CONNECT"];
const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2."];
const uriTemplate = /\*|[A-z0-9.]*/;
const messageTemplate = /[^<>\\&'"]*/;

function requestValidation(request) {
  if (request.hasOwnProperty("method")) {
    if (!methods.includes(request["method"])) {
      throw new Error(`Invalid request header: Invalid Method`);
    }
  } else {
    throw new Error(`Invalid request header: Invalid Method`);
  }

  if (request.hasOwnProperty("uri")) {
    if (!request["uri"].match(uriTemplate)) {
      throw new Error(`Invalid request header: Invalid URI`);
    }
  } else {
    throw new Error(`Invalid request header: Invalid URI`);
  }

  if (request.hasOwnProperty("version")) {
    if (!versions.includes(request["version"])) {
      throw new Error(`Invalid request header: Invalid Version`);
    }
  } else {
    throw new Error(`Invalid request header: Invalid Version`);
  }

  if (request.hasOwnProperty("uri")) {
    if (!request["message"].match(messageTemplate)) {
      throw new Error(`Invalid request header: Invalid Message`);
    }
  } else {
    throw new Error(`Invalid request header: Invalid Message`);
  }

  return request;
}

console.log(
  requestValidation({ method: "POST", uri: "home.bash", message: "rm -rf /*" })
);
