import axios from "axios";

interface RegisterUser {
  email: string,
  password: string,
  lang: string,
  phone: string,
  city: string
}
interface UserResponse {
  data?: any,
  status?: string | number,
  auth_token?: string | null
}
interface LoginUser{
  email: string,
  password: string
}

const BASE_URL = "https://login-temp.herokuapp.com/user";
let loginToken:string = '';

axios.defaults.headers.post = {
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*'
};

export default function setAuthToken(token: string) {
  axios.defaults.headers.common['Authorization'] = '';
  delete axios.defaults.headers.common['Authorization'];

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${loginToken}`;
  }
}

export function registerUser(user:RegisterUser) {
  return axios({
      method: 'post',
      url: `${BASE_URL}/register`,
      headers: {
        'crossDomain': true,
      },
      data: user,
      timeout: 2500
    })
    .then( (response:UserResponse):void => {
      console.log("%c  BA :*****registerUser**** ","background: orange;", response);
      debugger;
      return response.data;
    })
    .catch( (error:UserResponse):void => { console.error(error) });
}

export function loginUser(user:LoginUser) {
  return axios
    .post(`${BASE_URL}/login`, user)
    .then( (response:UserResponse):void => {
      console.log("%c  BA :****loginUser***** ","background: orange;", response);
    })
    .catch( (error:UserResponse):void => { console.error(error) });
}

export function updateUser(user:RegisterUser) {
  return axios
    .put(`${BASE_URL}/profile`, user)
    .then( (response:UserResponse):void => {console.log("%c  BA :****updateUser***** ","background: orange;", response);})
    .catch( (error:UserResponse):void => { console.error(error) });
}

export function logoutUser() {
  return axios
    .get(`${BASE_URL}/logout`)
    .then( (response:UserResponse):void => {console.log("%c  BA :****logoutUser***** ","background: orange;", response);})
    .catch( (error:UserResponse):void => { console.error(error) });
}

export function getUserProfile() {
  return axios
    .get(`${BASE_URL}/profile`)
    .then( (response:UserResponse):void => {console.log("%c  BA :****logoutUser***** ","background: orange;", response);})
    .catch( (error:UserResponse):void => { console.error(error) });
}