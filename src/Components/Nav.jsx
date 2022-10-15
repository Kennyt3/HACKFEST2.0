import { Flex, Link, Text, Button, HStack, Divider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <HStack spacing='10' fontSize='24px' px='20'>
      <NavLink to='/' end>
        {({ isActive }) => (
          <>
            <Text fontSize='24px' mb='1'>
              Home
            </Text>
            <Divider
              rounded='lg'
              borderWidth={2}
              w='90%'
              mx='auto'
              borderColor={isActive ? "#3981EF" : "transparent"}
            />
          </>
        )}
      </NavLink>

      <NavLink to='/blog' end>
        {({ isActive }) => (
          <>
            <Text fontSize='24px' mb='1'>
              Blog
            </Text>
            <Divider
              rounded='lg'
              borderWidth={2}
              w='90%'
              mx='auto'
              borderColor={isActive ? "#3981EF" : "transparent"}
            />
          </>
        )}
      </NavLink>

      <NavLink to='/services' end>
        {({ isActive }) => (
          <>
            <Text fontSize='24px' mb='1'>
              Services
            </Text>
            <Divider
              rounded='lg'
              borderWidth={2}
              w='90%'
              mx='auto'
              borderColor={isActive ? "#3981EF" : "transparent"}
            />
          </>
        )}
      </NavLink>

      <NavLink to='/about-us' end>
        {({ isActive }) => (
          <>
            <Text fontSize='24px' mb='1'>
              About Us
            </Text>
            <Divider
              rounded='lg'
              borderWidth={2}
              w='90%'
              mx='auto'
              borderColor={isActive ? "#3981EF" : "transparent"}
            />
          </>
        )}
      </NavLink>

      <NavLink to='/contact-us' end>
        {({ isActive }) => (
          <>
            <Text fontSize='24px' mb='1'>
              Contact Us
            </Text>
            <Divider
              rounded='lg'
              borderWidth={2}
              w='90%'
              mx='auto'
              borderColor={isActive ? "#3981EF" : "transparent"}
            />
          </>
        )}
      </NavLink>
    </HStack>
  );
};

export default Nav;
