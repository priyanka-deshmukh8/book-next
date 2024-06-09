"use client";

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../components/Clients";
import { useRouter } from "next/navigation";

const Page = () => {
  const { user } = useContext(Context);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      if (!user._id) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    } else {
      router.push("/login");
    }
  }, [user, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Page;
