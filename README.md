# @liinkiing/react-tabs

> A composable React tabs library

[![NPM](https://img.shields.io/npm/v/@liinkiing/react-tabs.svg)](https://www.npmjs.com/package/@liinkiing/react-tabs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @liinkiing/react-tabs
```
Or
```bash
yarn add @liinkiing/react-tabs
```
Internally, it uses [framer/motion](https://github.com/framer/motion) packages for the animations between the tab content. It is referenced as a peerDependency, and you should add `framer-motion` to your packages if you are not already using it. 

```bash
npm install --save framer-motion
```
Or
```bash
yarn add framer-motion
```
## Usage

You can use the `animate`, `initial` and `exit` props in `<Tabs>` component to customize the behaviour of the transitions.
 
```tsx
import * as React from 'react'

import { Tab, Tabs } from '@liinkiing/react-tabs'

class Example extends React.Component {
  render () {
    return (
      <Tabs
          {/* These values are the ones by default */}
          initial={{opacity: 0, x: 40}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 40}}
        >
        <Tab>
          <Tab.Title>First tab</Tab.Title>
          <Tab.Content>First Content</Tab.Content>
        </Tab>
        <Tab>
          <Tab.Title>Second tab</Tab.Title>
          <Tab.Content>Second content</Tab.Content>
        </Tab>
      </Tabs>
    )
  }
}
```

## License

MIT © [liinkiing](https://github.com/liinkiing)
