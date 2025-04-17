"use client";

import React from "react";
import { Box, Grid, Table, Text, VStack } from "@chakra-ui/react";
import { AppCard } from "@/components/ui/AppCard";
import { Header } from "@/components/ui/Header";

export default function Home() {
  return (
    <VStack mt={20} maxW="100%" w={1200} margin="0 auto">
      <Header />
      <Box textAlign="start" h={200}></Box>
      <Grid>
        <AppCard title="YOUR LIFE" description="人生の実績解除" />
        <AppCard title="mappie" description="地図記号学習" />
      </Grid>
      <Box>
        <Table.Root>
          <Table.Body>
            <Table.Row>
              <Table.Cell>My Name</Table.Cell>
              <Table.Cell>筒井 健登(Tsutsui Kento)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Skills</Table.Cell>
              <Table.Cell>React,Next.JS,TypeScript</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>
    </VStack>
  );
}
