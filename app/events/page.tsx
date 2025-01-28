'use client'

import React, { useState, useEffect } from 'react';
import EventCard from '@/components/ui/EventCard';

export default function Events() {
  interface Event {
    title: string;
    description: string;
    date: string;
    location: string;
    eventType: string;
    participationRequirements: string;
    preparationGuidelines: string;
    tasks: string[];
    hosts: string[];
    accessibility: string;
    cancellation: string;
    media: string[];
  }

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(storedEvents);
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold mb-6 text-green-800">Upcoming Events</h1>
          <p className="text-xl mb-6 text-gray-700">
            Discover and join local climate-related events.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
              eventType={event.eventType}
              participationRequirements={event.participationRequirements}
              preparationGuidelines={event.preparationGuidelines}
              tasks={event.tasks}
              hosts={event.hosts}
              accessibility={event.accessibility}
              cancellation={event.cancellation}
              media={event.media}
            />
          ))}
        </div>
      </div>
    </div>
  );
}