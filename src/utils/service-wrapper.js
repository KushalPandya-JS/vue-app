export const fetchWrapper = {
  get,
  post
}

function get (url) {
  const requestOptions = {
    method: 'GET'
  }
  return window.fetch(url, requestOptions).then(handleResponse)
}

function post (url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body
  }
  return window.fetch(url, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  console.log(response)
  return response.text().then((text) => {
    const data = text && JSON.parse(text)

    console.log(data)

    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
