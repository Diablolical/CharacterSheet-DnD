import axios from 'axios'

async function _makeRequest (request, retryCount = 0) {
    if (retryCount >= 2) {
        const msg = 'Too many requests'
        throw new Error(msg)
    }

    let response
    try {
        (response = await axios.request(request))
    } catch (err) {
        if ((err?.response?.status === 502 || err?.response?.status === 504) &&
            request.method === 'GET') {
        return _makeRequest(request, retryCount + 1)
        }
        throw err
    }
    return response
}

async function makeRequest (request) {
    let response
    try {
      (response = await _makeRequest(request))
    } catch (err) {
        //todo: network error handling
      const status = err?.response?.status
      const message = err?.response?.message
      alert("Error: " + message + ". Status: " + status)
    }
    return response
}

const API = {
    makeRequest
}

export { API }

export default makeRequest