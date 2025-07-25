import { redirect } from "react-router";

export function getTokenDuration() {
	const storedExpirationDate = localStorage.getItem("expiration");
	const expirationDate = new Date(storedExpirationDate);
	const now = new Date();
	const duration = expirationDate.getTime() - now.getTime();
	return duration;
}

export function getAuthToken() {
	const token = localStorage.getItem("token");

	if (!token) {
		return null;
	}

	const tokenDuration = getTokenDuration();

	if (tokenDuration < 0) {
		return "EXPIRED";
	}

	return token;
}

export function getCurrentUser() {
	const currentUser = JSON.parse(localStorage.getItem("currentUser"));

	return currentUser;
}

export function rootLoader() {
	const token = getAuthToken();
	const currentUser = getCurrentUser();

	if (!token) {
		return redirect("/login");
	}

	return [token, currentUser];
}

export function checkCurrentUser(role) {
	const currentUser = JSON.parse(localStorage.getItem("currentUser"));

	return currentUser[role];
}

export function checkAuthLoader(property) {
	const user = getCurrentUser();

	if (!user[property]) {
		throw json({ message: "Unauthorized access." }, { status: 401 });
	}

	return null;
}
