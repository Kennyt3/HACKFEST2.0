import { Flex, Box, Heading, Stack, Image } from "@chakra-ui/react";
import Header from "./Components/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Box w='full' maxW='1440px' h='100vh' mx='auto' pt='20' >
      <Routes>
        <Route index element={<Header />} />
        <Route path='/blog' element={<Header />} />
        <Route path='/services' element={<Header />} />
        <Route path='/about-us' element={<Header />} />
        <Route path='/contact-us' element={<Header />} />
      </Routes>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/blog' element={<Home />} />
        <Route path='/about-us' element={<Home />} />
        <Route path='/contact-us' element={<Home />} />

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Box>
  );
}

export default App;
