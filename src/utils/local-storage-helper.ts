import { JWT_AUTH_TOKEN_KEY } from "../constants/constants"

export const isUserAuthorized = (): boolean => {
	if (localStorage.getItem(JWT_AUTH_TOKEN_KEY)) {
		return true;
	} else {
		return false;
	}
}

export const deleteJwtAuthTokenKey = (): void => {
	localStorage.removeItem(JWT_AUTH_TOKEN_KEY);
}

export const getJwtAuthTokenKey = (): string => {
	return localStorage.getItem(JWT_AUTH_TOKEN_KEY) || '';
}