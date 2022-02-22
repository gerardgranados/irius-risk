class RestApi {

  constructor(client, url, parseResponseFn) {
    this.url = url;
    this.client = client;
    this.parseResponseFn = parseResponseFn;
  }

  index(params) {
    return this.client.get(this.url, {params})
      .then((response) => response.data)
      .then((response) => this.parseResponseFn(response))
      // .catch(e=>throw Error(e?.message))
  }

  show(id) {
    return this.client.get(`${this.url}/${id}`)
      .then((response) => response.data)
      .then((response) => this.parseResponseFn(response));
  }

  store(data) {
    return this.client.post(this.url, data)
      .then((response) => response.data)
      .then((response) => this.parseResponseFn(response))
  }

  update(id, data) {
    return this.client.put(`${this.url}/${id}`, data)
      .then((response) => response.data);
  }

  delete(id) {
    return this.client.delete(`${this.url}/${id}`)
      .then((response) => response.data)
      .then((response) => this.parseResponseFn(response));
  }
}

export default RestApi;
