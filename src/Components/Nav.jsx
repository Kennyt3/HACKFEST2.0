import { Flex, Link } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex>
      <Flex>
        <Link href=''>Home</Link>
        <Link href='#'>Blog</Link>
        <Link href='#'>Services</Link>
        <Link href='#'>About Us</Link>
        <Link href='#'>Contact Us</Link>
      </Flex>
      <div>
        <a href='#'>Register</a>
      </div>
    </Flex>
  );
};

export default Nav;
