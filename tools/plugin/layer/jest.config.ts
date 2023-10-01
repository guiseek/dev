/* eslint-disable */
export default {
  displayName: 'plugin-layer',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', {tsconfig: '<rootDir>/tsconfig.spec.json'}],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/tools/plugin/layer',
  moduleNameMapper: {
    '@nx/angular/src/utils/nx-devkit/route-utils':
      '<rootDir>/src/mocks/add-route.ts',
  },
}
