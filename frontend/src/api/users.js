import axios from "axios";

export const userLogin = (payload) => {
  try {
    const response = axios.post("/api/users/login", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const userRegister = (payload) => {
  try {
    const response = axios.post("/api/users", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserData = (id, token) => {
  try {
    const response = axios.get(`/api/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateUserData = (payload, token) => {
  try {
    const response = axios.put(`/api/users/profile`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
