"use client";
import { useEffect, useState } from "react";
import Login from "./login/page";
import axios from "axios";
import { endPoint } from "@/components/dev";
import { toast } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const id: any | undefined = localStorage.getItem("token");
  useEffect(() => {
    if (id) {
      // Make a GET request to fetch user data based on the ID
      axios
        .get(`${endPoint}/admin/${id}`)
        .then((response) => {
          // Handle successful response
          setUserData(response.data);
        })
        .catch((err) => {
          // Handle error
          toast.error(err.message || "An error occurred");
          setError(err.message || "An error occurred");
        });
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Render based on the presence of user data and matching ID

  if (!id) {
    return <Login />;
  }
  if (!userData) {
    // If userData is not fetched yet, return a loading state or spinner
    return <div>Loading...</div>;
  }
  if (userData?._id === localStorage.getItem("token")) {
    // If the fetched user data _id matches the stored ID, render the children
    return <>{children}</>;
  }

  // If the IDs don't match or userData is not available, render the Login component
  return <Login />;
}
