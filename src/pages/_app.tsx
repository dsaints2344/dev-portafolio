import "@mantine/core/styles.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Loader,
  MantineProvider,
  Center,
  createTheme,
  defaultVariantColorsResolver,
  parseThemeColor,
  VariantColorsResolver,
} from "@mantine/core";
import Layout from "@/components/layout/layout";
import "../i18n/config";
import { useEffect, useState } from "react";

// Mantine 7+ paints an explicit shade (e.g. "green.9") as the light variant's
// background and caps subtle text at shade 6; keep the v6 look this UI was built with
const variantColorResolver: VariantColorsResolver = (input) => {
  const resolved = defaultVariantColorsResolver(input);
  const parsed = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  if (!parsed.isThemeColor || parsed.shade === undefined) {
    return resolved;
  }

  const shades = input.theme.colors[parsed.color];
  if (input.variant === "light") {
    return { ...resolved, background: shades[0], hover: shades[1], color: shades[parsed.shade] };
  }
  if (input.variant === "subtle") {
    return { ...resolved, color: shades[parsed.shade] };
  }
  return resolved;
};

const theme = createTheme({
  // Mantine 9 defaults to "md"; keep the original v6 corner radius
  defaultRadius: "sm",
  variantColorResolver,
  colors: {
    indigo: [
      "#EBF4FA",
      "#C7E0F0",
      "#A2CDE6",
      "#7EB9DD",
      "#5AA5D3",
      "#3691C9",
      "#2B74A1",
      "#205779",
      "#163A50",
      "#0B1D28",
    ],
    richBlack: [
      "#E6FDFE",
      "#BAF9FD",
      "#8DF4FB",
      "#61F0FA",
      "#34ECF9",
      "#08E8F7",
      "#06B9C6",
      "#058B94",
      "#035D63",
      "#022E31",
    ],
    bondiBlue: [
      "#E5FCFF",
      "#B8F6FF",
      "#8AF0FF",
      "#5CEAFF",
      "#2EE4FF",
      "#00DEFF",
      "#00B1CC",
      "#008599",
      "#005966",
      "#002C33",
    ],
    americanBlue: [
      "#EFEFF5",
      "#D2D3E4",
      "#B6B7D3",
      "#999BC2",
      "#7C7FB1",
      "#60639F",
      "#4D4F80",
      "#393B60",
      "#262740",
      "#131420",
    ],
  },
});

export default function App({ Component, pageProps }: AppProps) {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);

  return (
    <MantineProvider theme={theme}>
      {isLoading ? 
      <Center style={{height: "95vh"}}>
        <Loader type="bars" color="indigo.7" size="xl"/>
      </Center>
      : 
      <Layout>
        <Component {...pageProps} />
      </Layout>}
    </MantineProvider>
  );
}
