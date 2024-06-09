import Link from "next/link";
import React from "react";
import { LogoutBtn } from "../components/Clients";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>BookList</h2>
      </div>
      <article>
        <div className="text-center mb-6">
          <Link href="/">
            <Image 
              src="/home.png" 
              alt="home" 
              className="mx-auto mb-1" 
              width={70} 
              height={70} 
            />
          </Link>
        </div>
        <div className="text-center mb-6">
          <Link href="/">
            <Image 
              src="/profile.png" 
              alt="profile" 
              className="mx-auto mb-1" 
              width={70} 
              height={70} 
            />
          </Link>
        </div>
        <LogoutBtn />
      </article>
    </div>
  );
};

export default Header;
