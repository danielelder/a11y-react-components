# a11y-react-components

Accessible React Component Library

- [x] Built with [React](https://reactjs.org/) v16.x.
- [x] Statically typed with[Typescript](https://www.typescriptlang.org/).
- [x] Consistent code style with [TSLint](https://palantir.github.io/tslint/).
- [x] [React Testing Library](https://github.com/testing-library/react-testing-library) for dom testing.
- [x] [Emotion](https://github.com/emotion-js/emotion) for css-in-js.
- [x] [Storybook](https://storybook.js.org/) for developing UI components in isolation.

## Scripts

| Script | Purpose |
| ------ | ------- |
| `npm start` | Runs the app in the development mode at [http://localhost:3000](http://localhost:3000) |
| `npm test` | Launches the test runner in the interactive watch mode |
| `npm run build` | Builds the app for production to the `build` folder |

## References

https://medium.com/skillthrive/build-a-react-accordion-component-from-scratch-using-react-hooks-a71d3d91324b

https://reactjs.org/docs/components-and-props.html
https://emotion.sh/docs/media-queries
https://github.com/cwlsn/rinse-react
https://itnext.io/how-to-write-your-own-reusable-react-component-library-a57dc7c9a210
https://storybook.js.org/docs/guides/guide-react/
https://testing-library.com/docs/react-testing-library/setup

## IDE

Using the following plugins for VS Code will improve the developer experience when developing this project:

[vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
[MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Issues

The UI can get into a state where the addon panel is hidden based on local storage. To fix it run localStorage.clear() in the browser console and hard-reload the page.
