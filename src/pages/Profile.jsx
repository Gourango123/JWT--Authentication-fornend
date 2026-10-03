import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Config";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data.user || res.data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user)
    return (
      <p className="flex min-h-[70vh] items-center justify-center bg-gray-100 px-3 text-sm text-gray-600 sm:text-base">
        Loading...
      </p>
    );

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-100 px-3 py-6 sm:px-4 sm:py-10">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-lg sm:max-w-md sm:p-8">
        <h2 className="mb-5 text-center text-2xl font-bold text-gray-800 sm:mb-6 sm:text-3xl">
          Profile
        </h2>

        <div className="space-y-3 sm:space-y-4">
          <p className="break-words rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 sm:px-4 sm:text-base">
            <span className="font-semibold text-gray-800">Name :</span>{" "}
            {user.name}
          </p>
          <p className="break-all rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 sm:px-4 sm:text-base">
            <span className="font-semibold text-gray-800">Email :</span>{" "}
            {user.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full rounded-lg bg-red-600 py-2 text-sm font-semibold text-white transition hover:bg-red-700 sm:py-2.5 sm:text-base"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;