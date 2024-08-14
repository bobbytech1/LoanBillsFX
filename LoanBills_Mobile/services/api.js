import { API_URL } from "@env";
import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useLogout  from "../utilities/handleLogout";
import { AuthContext } from "../context/AuthContext";


export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // If the response status is not 2xx, throw an error with the response body
      const errorData = await response.json();
      throw new Error(errorData);
    }

    // Parse the response data as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    throw error.message ? JSON.parse(error.message) : error;
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const response = await fetch(`${API_URL}api/user/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    if (!response.ok) {
      // This will create an error object with the status text
      const errorText = await response.text();
      throw new Error(errorText || response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Here we handle any errors that were thrown above
    if (error instanceof Error) {
      throw error.message;
    } else {
      throw error;
    }
  }
};

export const resendOtp = async (email) => {
  try {
    const response = await fetch(`${API_URL}api/user/resend-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      // This will create an error object with the status text
      const errorText = await response.text();
      throw new Error(errorText || response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Here we handle any errors that were thrown above
    if (error instanceof Error) {
      throw error.message;
    } else {
      throw error;
    }
  }
};

let logoutTimer; 
export const loginUser = async (email, password, onLogout) => {
  try {
    const response = await fetch(`${API_URL}api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || response.statusText);
    }

    const data = await response.json();
    const { token } = data;
    const expiresIn = 20 * 24 * 60 * 60 * 1000;
    
    // Store token and login time
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('loginTime', Date.now().toString());

    // Clear previous timer if exists
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }

    // Start timer for automatic logout
    logoutTimer = setTimeout(() => {
      if (onLogout) {
        onLogout(); // Trigger the logout callback
      }
    }, expiresIn);

    return data;
  } catch (error) {
    throw error.message || 'Failed to login';
  }
};

export const requestPasswordReset = async (email) => {
  try {
    const response = await fetch(`${API_URL}api/forgot-password`, { // Make sure API_URL ends with a slash or adjust URL accordingly
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), // Wrap email in an object if API expects { email }
    });

    if (!response.ok) {
      // Read error response text and throw error
      const errorText = await response.text();
      throw new Error(errorText || response.statusText);
    }

    return await response.json(); // Return parsed JSON
  } catch (error) {
    // Provide more informative error messages
    throw new Error(error.message || 'An unknown error occurred');
  }
};


