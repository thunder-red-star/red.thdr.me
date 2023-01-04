import '../styles/globals.css'
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      "background": "#FBC6C6",
      "foreground": "#FBC6C6",
      "sectionColor": "#000000",
    },
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      "background": "#1c1a1a",
      "sectionColor": "#FFFFFF",
    }
  }
})

function MyApp({ Component, pageProps }) {
  return <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </NextThemesProvider>
}

export default MyApp
