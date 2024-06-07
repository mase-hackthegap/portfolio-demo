import React from "react";
import { Image, Box, Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";
import logo from '../images/logo2.png';

const greeting = "Hi, I'm Teodoro Lima!";
const bio1 = "Developer and Designer";
const bio2 = "Focused on creating beautifully accessible frontend projects";

const LandingSection = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      minH="100vh"
      justify="center"
      bgGradient="linear(to-r, #DFD6A9, #C2B36D)"
      px={4}
    >
      <Flex
        align="center"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        width="100%"
        maxW="1200px"
        mx="auto"
        p={6}
        bg="#F9F3EE"
        boxShadow="2xl"
        borderRadius="lg"
      >
        <Box
          w={{ base: "100%", md: "40%" }}
          display="flex"
          justifyContent="center"
          mb={{ base: 8, md: 0 }}
        >
          <Image
            boxSize="300px"
            src={logo}
            alt="Dark green lotus logo"
          />
        </Box>
        <Stack
          spacing={4}
          w={{ base: "100%", md: "60%" }}
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          p={4}
        >
          <Heading as="h1" size="2xl" fontWeight="bold" color="gray.700">
            {greeting}
          </Heading>
          <Text fontSize="xl" color="gray.500" fontWeight="semibold">
            {bio1}
          </Text>
          <Text fontSize="lg" color="gray.500" fontWeight="normal">
            {bio2}
          </Text>
          <Button
            onClick={handleClick("projects")}
            backgroundColor="#69663A"
            color="white"
            size="lg"
            mt={4}
            boxShadow="lg"
            _hover={{ boxShadow: "xl", transform: "scale(1.05)", backgroundColor: "#55533A" }}
            transition="all 0.3s"
          >
            My work
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default LandingSection;
