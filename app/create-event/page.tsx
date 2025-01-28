'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export default function CreateEvent() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn, router]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [eventType, setEventType] = useState('');
  const [participationRequirements, setParticipationRequirements] = useState('');
  const [preparationGuidelines, setPreparationGuidelines] = useState('');
  const [tasks, setTasks] = useState('');
  const [hosts, setHosts] = useState('');
  const [accessibility, setAccessibility] = useState('');
  const [cancellation, setCancellation] = useState('');
  const [media, setMedia] = useState('');

  if (!isSignedIn) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      date,
      location,
      eventType,
      participationRequirements,
      preparationGuidelines,
      tasks,
      hosts,
      accessibility,
      cancellation,
      media,
    };
    // Save the new event to localStorage
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));
    // Clear the form
    setTitle('');
    setDescription('');
    setDate('');
    setLocation('');
    setEventType('');
    setParticipationRequirements('');
    setPreparationGuidelines('');
    setTasks('');
    setHosts('');
    setAccessibility('');
    setCancellation('');
    setMedia('');
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Create Event</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Event Type</label>
            <input
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Participation Requirements</label>
            <textarea
              value={participationRequirements}
              onChange={(e) => setParticipationRequirements(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Preparation Guidelines</label>
            <textarea
              value={preparationGuidelines}
              onChange={(e) => setPreparationGuidelines(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Tasks/Activities</label>
            <textarea
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Event Hosts/Contacts</label>
            <textarea
              value={hosts}
              onChange={(e) => setHosts(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Accessibility</label>
            <textarea
              value={accessibility}
              onChange={(e) => setAccessibility(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Cancellation/Rescheduling</label>
            <textarea
              value={cancellation}
              onChange={(e) => setCancellation(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Media & Sharing</label>
            <textarea
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}