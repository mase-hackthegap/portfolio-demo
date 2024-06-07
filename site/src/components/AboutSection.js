import React from "react";
import { Image, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import headshot from '../images/demo-headshot.png';

const title = "About Me";
const aboutText = `
  Hi, I'm Teodoro Lima! I'm a developer and designer with a passion for creating beautifully accessible frontend projects. I have a strong background in both design and development, which allows me to bring a unique perspective to building seamless user experiences. With a focus on modern web technologies and a keen eye for detail, I ensure that every project I work on is both functional and aesthetically pleasing. When I'm not coding or designing, I enjoy exploring new technologies, contributing to open source projects, and sharing my knowledge with the community.
`;

const AboutMeSection = () => (
  <Flex
    direction="column"
    align="center"
    m="0 auto"
    minH="100vh"
    justify="center"
    bg="#DFD6A9"
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
    >
      <Box
        w={{ base: "100%", md: "40%" }}
        display="flex"
        justifyContent="center"
        mb={{ base: 8, md: 0 }}
      >
        <Image
          boxSize="300px"
          src={headshot}
          alt="Close up photograph of a man"
          borderRadius="full"
          boxShadow="2xl"
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
          {title}
        </Heading>
        <Text fontSize="lg" color="#000000" fontWeight="normal" whiteSpace="pre-line">
          {aboutText}
        </Text>
      </Stack>
    </Flex>
  </Flex>
);

export default AboutMeSection;
