module.exports = {
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-jest/register',
        '@storybook/addon-viewport',
        '@storybook/preset-create-react-app'
    ],
    stories: [
      '../src/**/*.stories.tsx',
      '../docs/**/*.stories.mdx'
    ]
};
