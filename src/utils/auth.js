// src/utils/auth.js

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem("authToken");
};

// Decode JWT safely
export const decodeJWT = (token) => {
  try {
    if (!token) return null;
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error("Error decoding JWT:", err);
    return null;
  }
};

// Get decoded token (user info)
export const getUser = () => {
  const token = getToken();
  return decodeJWT(token);
};
