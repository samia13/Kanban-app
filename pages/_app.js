import { Layout } from "../components";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "../styles/globals.css";

const colors = {
  kanban: {
    900: "#24242e",
    800: "#21212d",
    700: "#2c2c38",
    purple: "#8671fd",
  },
};

const theme = extendTheme({
  colors,
  components: {
    Button: {
      baseStyle: {
        _hover: { background: "brand.purple" },
      },
      variants: {
        "without-bg": {
          bg: "none",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
