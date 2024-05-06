import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex bg="gray.100" p={4}>
      <Box p="2">
        <Link to="/">
          <Button colorScheme="teal">Home</Button>
        </Link>
      </Box>
      <Box p="2">
        <Link to="/learn">
          <Button colorScheme="teal">Learn</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
