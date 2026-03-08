import { Heading, HStack } from "@chakra-ui/react";
// import logo from "../assets/logo.webp";
import { ColorModeButton } from "../ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <HStack>
        {/* <Image src={logo} /> */}
        <Heading>مرشد</Heading>
      </HStack>

      <ColorModeButton />
    </HStack>
    // <HStack justifyContent={"space-between"} padding={"10px"}>
    //   <Text color={{ base: "black", _dark: "white" }}>مرشد</Text>

    //   <ColorModeButton />
    // </HStack>
  );
};

export default NavBar;
