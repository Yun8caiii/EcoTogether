'use client'

import React from 'react';
import { useGeolocation } from '../utils/useGeolocation';
import CardTemplate from '../components/ui/CardTemplate';

export default function Home() {
  const location = useGeolocation();

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold mb-6 text-green-800">Welcome to EcoTogether</h1>
          <p className="text-xl mb-6 text-gray-700">
            EcoTogether is your hub for climate action. Discover local events, track your contributions, and connect with like-minded individuals passionate about sustainability.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700">
            Get Started
          </button>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4 text-green-700">Key Features</h2>
          <ul className="list-disc list-inside text-lg text-gray-800">
            <li>Find and join local climate-related events</li>
            <li>Track your contributions and earn rewards</li>
            <li>Connect with others and build a network</li>
            <li>Create and manage your own events</li>
          </ul>
        </div>
        {location && (
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-green-700">Your Location</h3>
            <p className="text-lg text-gray-700">
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </p>
          </div>
        )}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardTemplate
            title="Tree Planting"
            description="Join us for a tree planting event."
            content="Help plant trees in your local community and make a positive impact on the environment."
          />
          <CardTemplate
            title="Recycling Drive"
            description="Participate in our recycling drive."
            content="Bring your recyclable items and help us sort them into the appropriate bins."
          />
          <CardTemplate
            title="Beach Cleanup"
            description="Join our beach cleanup event."
            content="Help clean up the beach and remove trash to protect marine life."
          />
        </div>
      </div>
    </div>
  );
}
