import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./customStyles/Button";
const components = {
  Button,

  ListItem: {},
};
export const customTheme = extendTheme({
  components,
});
