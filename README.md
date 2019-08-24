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

## Usage

```tsx
import * as React from 'react'

import { Tab, Tabs } from '@liinkiing/react-tabs'

class Example extends React.Component {
  render () {
    return (
      <Tabs>
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
