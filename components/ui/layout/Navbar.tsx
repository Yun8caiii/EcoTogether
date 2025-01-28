import React from "react";
import Link from "next/link";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="bg-green-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">EcoTogether</Link>
        </div>
        <div className="space-x-4">
          <Link href="/events" className="text-white hover:text-gray-200">
            Events
          </Link>
          <Link href="/profile" className="text-white hover:text-gray-200">
            Profile
          </Link>
          <Link href="/leaderboard" className="text-white hover:text-gray-200">
            Leaderboard
          </Link>
          <Link href="/create-event" className="text-white hover:text-gray-200">
            Create Event
          </Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
