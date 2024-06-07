import { Heading, Flex, Image, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="#F9F3EE"
      boxShadow="2xl"
      _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
      transition="all 0.3s"
      m="4"
    >
      <Box p="4">
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Box ml="3">
              <Heading size="sm" color="#69663A">{title}</Heading>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Image src={imageSrc} alt={title} />
      <Box p="4">
        <Text>{description}</Text>
        <Flex justifyContent="flex-end">
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
