import axios from 'axios'


let instance = axios.create({
    baseURL: `//localhost:5000`,
  })

instance.interceptors.response.use( function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.status === 401 && error.response.data.error === "Please Authenticate"){
        window.location.href = "/"
    }
    return Promise.reject(error)
  });
export default instance