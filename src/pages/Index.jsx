import React, { useState } from "react";
import { Box, Button, Container, Heading, Text, VStack, HStack, Image, Input, useToast } from "@chakra-ui/react";
import { FaLink, FaCreditCard, FaPlus, FaArrowRight } from "react-icons/fa";

const Index = () => {
  const [isBankConnected, setIsBankConnected] = useState(false);
  const [balance, setBalance] = useState(0.0);
  const [amountToAdd, setAmountToAdd] = useState("");
  const toast = useToast();

  const handleConnectBank = () => {
    // Replace with actual bank connect logic
    setIsBankConnected(true);
    toast({
      title: "Bank Connected",
      description: "You've successfully connected your bank account.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleAddFunds = () => {
    // Replace with actual add funds logic
    const numericAmount = parseFloat(amountToAdd);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to add.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setBalance(balance + numericAmount);
    setAmountToAdd("");
    toast({
      title: "Funds Added",
      description: `${numericAmount.toFixed(2)} added to your card successfully.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Virtual Card Funding
        </Heading>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            {!isBankConnected ? (
              <Button leftIcon={<FaLink />} colorScheme="teal" onClick={handleConnectBank}>
                Connect Your Bank
              </Button>
            ) : (
              <VStack spacing={3} alignItems="flex-start">
                <HStack>
                  <Text fontWeight="semibold">Card Balance:</Text>
                  <Text>${balance.toFixed(2)}</Text>
                </HStack>
                <HStack>
                  <Input placeholder="Amount" value={amountToAdd} onChange={(e) => setAmountToAdd(e.target.value)} />
                  <Button colorScheme="green" leftIcon={<FaPlus />} onClick={handleAddFunds}>
                    Add Funds
                  </Button>
                </HStack>
              </VStack>
            )}
          </VStack>
        </Box>
        <Box>
          <HStack spacing={4}>
            <Image src="https://images.unsplash.com/photo-1528458876861-544fd1761a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwY3JlZGl0JTIwY2FyZHxlbnwwfHx8fDE3MDk2NTA1Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" objectFit="cover" borderRadius="md" />
            <VStack alignItems="flex-start">
              <HStack>
                <FaCreditCard />
                <Text>Your Virtual Card</Text>
              </HStack>
              <Button rightIcon={<FaArrowRight />} colorScheme="blue" variant="outline" size="sm" isDisabled={!isBankConnected}>
                Manage Card
              </Button>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
