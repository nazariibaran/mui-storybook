import { ThemeProvider } from '@mui/material'
import { mainTheme } from '../themes/mainTheme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}