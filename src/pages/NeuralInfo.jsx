import React from "react";
import { Box, Container, Text, VStack } from "@chakra-ui/react";

const NeuralInfo = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Learn About Neural Networks
        </Text>
        <Box p={5} shadow="md" borderWidth="1px">
          <Text mt={4}>Neural networks are a series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default NeuralInfo;
