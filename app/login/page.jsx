/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { Context } from "../../components/Clients";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";
import styles from '../../styles/login.module.scss';

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      setUser(data.user);
      toast.success(data.message);
    } catch (error) {
      return toast.error(error);
    }
  };

  if (user?._id) return redirect("/");

  return (
    <div className={`${styles.login} min-h-screen flex items-center justify-center bg-gray-100`}>
      <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1>Welcome to our BookList Manager Application</h1>
        <div className="text-center mb-6">
    <img src="logo.png" alt="Logo" className="mx-auto mb-1" style={{ width: '70px', height: '70px' }}/>
</div>
        <form onSubmit={loginHandler} className="space-y-4">
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter Your Email Address"
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <button type="submit">
            Login
          </button>
          <p className="text-center text-gray-600">OR</p>
          <Link href="/register">
            <span className="block text-center text-blue-500 hover:underline cursor-pointer">
              New User? Register Here
            </span>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Page;
