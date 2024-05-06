import React from "react";
import { Box, Container, VStack, Circle, Text, HStack, Flex } from "@chakra-ui/react";
import { FaBrain } from "react-icons/fa";

const NeuralLayer = ({ nodes, label, index }) => {
  const rotation = index * 10;
  return (
    <VStack style={{ transform: `rotateY(${rotation}deg)` }}>
      <Text fontSize="lg" fontWeight="bold">
        {label}
      </Text>
      <HStack>
        {Array.from({ length: nodes }).map((_, idx) => (
          <Circle size="40px" bg="teal.500" key={idx} />
        ))}
      </HStack>
    </VStack>
  );
};

const NeuralConnection = ({ height }) => {
  return <Box height={height} width="2px" bg="gray.300" />;
};

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Neural Network Visualizer <FaBrain />
        </Text>
        <Flex direction="column" align="center">
          <NeuralLayer nodes={5} label="Input Layer" index={0} />
          <NeuralConnection height="50px" />
          <NeuralLayer nodes={3} label="Hidden Layer 1" index={1} />
          <NeuralConnection height="50px" />
          <NeuralLayer nodes={4} label="Hidden Layer 2" index={2} />
          <NeuralConnection height="50px" />
          <NeuralLayer nodes={2} label="Output Layer" index={3} />
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
