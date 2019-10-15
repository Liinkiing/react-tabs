# @liinkiing/react-tabs

> A composable React tabs library
> [https://liinkiing.github.io/react-tabs/](https://liinkiing.github.io/react-tabs/)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

**Typescript** support is by default enabled because the library is entirely written in Typescript

## Usage

You can use the `animate`, `initial` and `exit` props in `<Tabs>` component to customize the behaviour of the transitions.
 
`stretchTabsTitle` and `verticalLayout` can also be used in props of `<Tabs>` to personalize the appearance (see example)
 
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

Nested tabs are also supported

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
          <Tab.Title>Second tab with nested</Tab.Title>
          <Tab.Content>
            I have a totally different tabs component with different animations!
            <Tabs
              verticalLayout
              initial={{opacity: 0, x: -400, y: -20}}
              animate={{opacity: 1, x: 0, y: 0}}
              exit={{opacity: 0, x: -400, y: -20}}
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
          </Tab.Content>
        </Tab>
      </Tabs>
    )
  }
}
```

## Example
[https://liinkiing.github.io/react-tabs/](https://liinkiing.github.io/react-tabs/)

## Notes
This package was made just for the sake of learning and because I wanted a different API to compose my tabs. In a lot of tabs packages, you use a key to identify which tab correspond to which tab content but I wanted to have a hierarchy like this one:

```tsx
<Tabs>
  <Tab>
    <Tab.Title>...</Tab.Title>
    <Tab.Content>...</Tab.Content>
  </Tab>
  <Tab>
    <Tab.Title>...</Tab.Title>
    <Tab.Content>...</Tab.Content>
  </Tab>
</Tabs>
```
to have all the informations needed in one `Tab` component. It's just a matter of preference. But because you are entirely composing your tabs, you can cutomize them even more in your styles and do whatever you want. 
## License

MIT © [liinkiing](https://github.com/liinkiing)
