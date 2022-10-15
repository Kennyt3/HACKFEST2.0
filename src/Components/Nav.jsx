import { Flex, Link, Button, HStack } from "@chakra-ui/react";

const Nav = () => {
  return (
    <HStack spacing='10' fontSize='24px' px='20' >
      <Link borderBottom='4px solid #3981EF' href=''>
        Home
      </Link>
      <Link href='#'>Blog</Link>
      <Link href='#'>Services</Link>
      <Link href='#'>About Us</Link>
      <Link href='#'>Contact Us</Link>
    </HStack>
  );
};

export default Nav;
