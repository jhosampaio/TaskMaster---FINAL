import { environment } from "src/environments/environment";
const BASE_URL = 'http://localhost:5000';

export const LOGIN_URL = BASE_URL + '/users/login';
export const REGISTER_URL = BASE_URL + '/users/register';
export const HOME_URL = BASE_URL + '/master/home';
export const DESC_URL = BASE_URL + '/users/descricao';
export const ABOUT_URL = BASE_URL + '/users/sobre';
export const TECH_URL = BASE_URL + '/users/tecnologias';
export const SEND_EMAIL = BASE_URL + '/master/send-email';
