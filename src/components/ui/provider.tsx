"use client"

import { ChakraProvider, defaultConfig, createSystem, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Cairo', sans-serif` },
        body: { value: `'Cairo', sans-serif` },
      },
    },
  },
})

const system = createSystem(defaultConfig, customConfig)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
