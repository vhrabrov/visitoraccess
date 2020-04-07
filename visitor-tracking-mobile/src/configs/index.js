import {isTablet as isTabletDevice} from 'react-native-device-info';

export const login = `/login`;

export const patients = '/patient/search';
export const bookPatient = id => `/patient/book/${id}`;
export const unbookPatient = id => `/patient/unbook/${id}`;
export const rules = `/rules`;
export const survey = '/survey';

export const REQUEST_TIMEOUT = 20000;
export const BASE_URL = 'http://your.base.url';

export const isTablet = isTabletDevice();
