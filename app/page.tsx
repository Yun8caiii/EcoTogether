import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to EcoTogether</h1>
      <p className="text-lg mb-4">
        EcoTogether is your hub for climate action. Discover local events, track your contributions, and connect with like-minded individuals passionate about sustainability.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
        <ul className="list-disc list-inside">
          <li>Find and join local climate-related events</li>
          <li>Track your contributions and earn rewards</li>
          <li>Connect with others and build a network</li>
          <li>Create and manage your own events</li>
        </ul>
      </div>
    </div>
  );
}
