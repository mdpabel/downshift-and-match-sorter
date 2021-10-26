const _API = "https://fakestoreapi.com/";

function client(
  endPoint,
  { method, data, headers: customHeaders, customConfig } = {}
) {
  const config = {
    method: method ? method : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return window.fetch(_API + endPoint, { ...config }).then(async (res) => {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      Promise.reject(data);
    }
  });
}

export { client };
