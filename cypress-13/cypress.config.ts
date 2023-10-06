import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  component: {
    experimentalSingleTabRunMode: true,
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    }
  }
})