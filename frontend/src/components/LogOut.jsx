import React from 'react';
import { useAuth } from "../Context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const LogOut = () => {
  const [authuser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);  
      localStorage.removeItem("user");

      window.location.reload();

      toast.success("Logout successful!");
    } catch (error) {
      toast.error("Error during logout: " + error.message);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <button
        className="bg-slate-700 rounded-lg px-4 py-1 text-white uppercase mx-3"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default LogOut;
