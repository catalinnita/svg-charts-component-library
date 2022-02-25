import nextJest from 'next/jest'
import config from '@acme/jest/jest.config'

const createJestConfig = nextJest({
  dir: './src',
})

const customJestConfig = {
  ...config
}

export default createJestConfig(customJestConfig)