import { createContext, useState, useEffect } from "react";
import api from "../api";

export const UserContext = createContext(); // Named export

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null); // separate state for user ID
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) return;

    setToken(storedToken);

    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        console.log("Fetched user:", res.data);
        setUser(res.data);
        setUserId(res.data._id); // store ID separately
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setUser(null);
        setUserId(null);
        setToken(null);
        localStorage.removeItem("token");
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  const login = (userData, token) => {
    setUser(userData);
    setUserId(userData._id);
    setToken(token);
  };

  const logout = () => {
    setUser(null);
    setUserId(null);
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, userId, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
