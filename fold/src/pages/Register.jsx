import {
  Flex,
  Box,
  Heading,
  HStack,
  Stack,
  Button,
  Input,
  InputGroup,
  Center,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "cannot be less than 1")
      .max(30, "")
      .required("enter full name"),
    email: Yup.string().email("enter a valid email").required("enter email"),
    password: Yup.string()
      .min(8, "cannot be less than 8")
      .max(30, "")
      .required("enter password"),
    confirmPassword: Yup.string()
      .min(8, "cannot be less than 8")
      .max(30, "")
      .required("enter password"),
  });

  return (
    <Stack align='center' pt={["4", "4", "20"]}>
      <Heading fontSize={["30", "30", "48px"]} fontWeight='700'>
        Create Account!
      </Heading>
      <Box
        bgColor='#FFFFFF'
        rounded='3xl'
        w={["95%", "95%", "500px"]}
        px='5'
        pt='10'
        pb='5'>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({ getFieldProps, touched, errors, dirty }) => (
            <Stack as={Form} spacing='4'>
              <InputGroup>
                <Input
                  size='lg'
                  rounded='2xl'
                  {...getFieldProps("fullName")}
                  placeholder='full name'
                  type='text'
                />
              </InputGroup>

              <InputGroup>
                <Input
                  size='lg'
                  rounded='2xl'
                  {...getFieldProps("email")}
                  placeholder='email'
                  type='email'
                />
              </InputGroup>

              <InputGroup>
                <Input
                  size='lg'
                  rounded='2xl'
                  {...getFieldProps("password")}
                  placeholder='password'
                  type='password'
                />
              </InputGroup>

              <InputGroup>
                <Input
                  size='lg'
                  rounded='2xl'
                  {...getFieldProps("confirmPassword")}
                  placeholder='confirm password'
                  type='password'
                />
              </InputGroup>

              <Flex pb='5'>
                <Checkbox size='lg' />
                <Text ml='4'>
                  I agree to Terms of Service and Private Policy
                </Text>
              </Flex>

              <Button
                bgColor='#3981EF'
                color='white'
                rounded='14px'
                isDisabled={!dirty}
                type='submit'>
                SIGN UP
              </Button>
            </Stack>
          )}
        </Formik>

        <Text pt='4' textAlign='center'>
          Do you already have an account? <Link to='/login'>Sign in</Link>
        </Text>
      </Box>
    </Stack>
  );
};

export default Register;
