import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';

interface CardTemplateProps {
  title: string;
  description: string;
  content: string;
}

const CardTemplate: React.FC<CardTemplateProps> = ({ title, description, content }) => {
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default CardTemplate;