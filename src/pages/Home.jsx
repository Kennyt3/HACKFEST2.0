import {
  Flex,
  Box,
  Heading,
  Stack,
  Image,
  HStack,
  Text,
} from "@chakra-ui/react";
import doctorNurses from "../assets/doctor-nurses-special-equipment 3.png";
import stethoscopeBg from "../assets/pexels-karolina-grabowska-4386464 1.png";
import s11 from "../assets/s1 1.png";
import s21 from "../assets/s2 1.png";
import s31 from "../assets/s3 1.png";
import s41 from "../assets/s4 1.png";
import s5 from "../assets/s5.png";

const Home = () => {
  return (
    <>
      <Stack p='10'>
        <Flex w='full' align='center' >
          <Box
            w='full'
            fontSize='55px'
            lineHeight='87px'
            letterSpacing='1'
            maxW='524px'
            px='7'>
            <Heading fontSize='inherit' fontWeight='700' lineHeight='inherit'>
              We Are Ready to
            </Heading>
            <Heading
              fontSize='inherit'
              fontWeight='700'
              lineHeight='inherit'
              color='#3981EF'>
              Help Your Health
            </Heading>
            <Heading fontSize='inherit' fontWeight='700' lineHeight='inherit'>
              Problems
            </Heading>
            <Text fontSize='24px' fontWeight='400' lineHeight='33px'>
              Reach out to professional practisionals for your health using
              Healthy me, saving you of time and cost.
            </Text>
            <HStack spacing='10' py='5'>
              <Box w='96px'>
                <Heading fontSize='40px'>
                  200<span style={{ color: "#306CC7" }}>+</span>
                </Heading>
                <Text fontSize='20px'>Active Doctors</Text>
              </Box>
              <Box w='96px'>
                <Heading fontSize='40px'>
                  15k
                  <span style={{ color: "#306CC7" }}>+</span>
                </Heading>
                <Text fontSize='20px'>Active Users</Text>
              </Box>
              <Box w='96px'>
                <Heading fontSize='40px'>
                  50<span style={{ color: "#306CC7" }}>+</span>
                </Heading>
                <Text fontSize='20px'>Active Pharmacy</Text>
              </Box>
            </HStack>
          </Box>
          <Box w='full' position='relative'>
            <Image src={stethoscopeBg} />
            <Box position='absolute' top='0' left='14'>
              <Image src={doctorNurses} />
            </Box>
          </Box>
        </Flex>
        {/* partners */}
        <Flex w='full' justify='space-between' px='5' pt='10' >
          <Image src={s11} />
          <Image src={s21} />
          <Image src={s31} />
          <Image src={s41} />
          <Image src={s5} />
        </Flex>
      </Stack>
    </>
  );
};

export default Home;
