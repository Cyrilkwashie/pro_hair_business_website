export const ADMIN_PASSWORD = "password";
const SESSION_KEY = "hannie_admin_v1";

export function isLoggedIn(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === "true";
}

export function login(password: string): boolean {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "true");
    return true;
  }
  return false;
}

export function logout(): void {
  sessionStorage.removeItem(SESSION_KEY);
}
