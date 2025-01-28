import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  location: string;
  eventType: string;
  description: string;
  participationRequirements: string;
  preparationGuidelines: string;
  tasks: string;
  hosts: string;
  accessibility: string;
  cancellation: string;
  media: string;
}

const EventModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  date,
  location,
  eventType,
  description,
  participationRequirements,
  preparationGuidelines,
  tasks,
  hosts,
  accessibility,
  cancellation,
  media,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-2/3 max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <div>
          <p><strong>Date & Time:</strong> {date}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Event Type:</strong> {eventType}</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Participation Requirements:</strong> {participationRequirements}</p>
          <p><strong>Preparation Guidelines:</strong> {preparationGuidelines}</p>
          <p><strong>Tasks/Activities:</strong> {tasks}</p>
          <p><strong>Event Hosts/Contacts:</strong> {hosts}</p>
          <p><strong>Accessibility:</strong> {accessibility}</p>
          <p><strong>Cancellation/Rescheduling:</strong> {cancellation}</p>
          <p><strong>Media & Sharing:</strong> {media}</p>
        </div>
      </div>
    </div>
  );
};

export default EventModal;