// Sun Oct 20 2019 16:07:29 GMT+0200 (GMT+02:00)
  
import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export function get_users(options) {
  return axios({
    baseURL: API_BASE_URL,
    method: 'get',
    url: `/users`,
    ...options,
  });
}

export function delete_users(options) {
  return axios({
    baseURL: API_BASE_URL,
    method: 'delete',
    url: `/users`,
    ...options,
  });
}

export function get_users_by_uid(uid, options) {
  return axios({
    baseURL: API_BASE_URL,
    method: 'get',
    url: `/users/${uid}`,
    ...options,
  });
}

export function get_users_by_uid_pets(uid, options) {
  return axios({
    baseURL: API_BASE_URL,
    method: 'get',
    url: `/users/${uid}/pets`,
    ...options,
  });
}

export function delete_users_by_uid_pets_by_pid(uid, pid, options) {
  return axios({
    baseURL: API_BASE_URL,
    method: 'delete',
    url: `/users/${uid}/pets/${pid}`,
    ...options,
  });
}

