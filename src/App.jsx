import { Flex, Box, Heading, Stack, Image } from "@chakra-ui/react";
import Header from "./Components/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Stack w='full' maxW='1440px'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Stack>
  );
}

export default App;
