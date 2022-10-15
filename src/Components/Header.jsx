import { Flex, Box, Heading, HStack, Button } from "@chakra-ui/react";
import { BrandLogo } from "./Svgs";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HStack
      maxW='1440px'
      mx='auto'
      top='0'
      pos='fixed'
      zIndex={2000}
      w='full'
      bgColor='#FFFFFF'
      boxShadow='sm'
      py='2'
      pl='20'
      pr='7'
      align='center'>
      <BrandLogo />
      <Heading
        whiteSpace='nowrap'
        fontSize='29.1602px'
        fontWeight='700'
        bgGradient='linear(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)'
        bgClip='text'>
        Healthy Me
      </Heading>
      <Nav />
      <Button
        bgColor='#3981EF'
        rounded='7px'
        color='white'
        w='153px'
        onClick={() => navigate("/register")}>
        Register
      </Button>
    </HStack>
  );
};

export default Header;
