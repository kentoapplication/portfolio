"use client";

import { Card } from "@chakra-ui/react";

type Props = {
  title: string;
  description: string;
};

export const AppCard: React.FC<Props> = ({ title, description }) => {
  return (
    <Card.Root w={300} h={240} boxShadow={"md"} padding={4}>
      <Card.Header fontSize={32}>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Root>
  );
};
