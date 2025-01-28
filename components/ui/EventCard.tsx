import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';
import EventModal from './EventModal';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  eventType: string;
  participationRequirements: string;
  preparationGuidelines: string;
  tasks: string;
  hosts: string;
  accessibility: string;
  cancellation: string;
  media: string;
}

const EventCard: React.FC<EventCardProps> = ({
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
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className="m-4 cursor-pointer" onClick={handleOpenModal}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Location:</strong> {location}</p>
        </CardContent>
      </Card>
      <EventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        date={date}
        location={location}
        eventType={eventType}
        description={description}
        participationRequirements={participationRequirements}
        preparationGuidelines={preparationGuidelines}
        tasks={tasks}
        hosts={hosts}
        accessibility={accessibility}
        cancellation={cancellation}
        media={media}
      />
    </>
  );
};

export default EventCard;