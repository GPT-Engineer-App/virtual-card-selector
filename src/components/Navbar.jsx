import React from "react";
import { Box, Flex, Text, Container, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="teal.500" color="white" px={4} py={2}>
      <Container maxW="container.md">
        <Flex align="center">
          <Text fontSize="xl" fontWeight="bold">
            My Virtual Card
          </Text>
          <Spacer />
          {}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
