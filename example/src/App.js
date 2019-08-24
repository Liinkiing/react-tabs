import React, { Component } from 'react'

import { Tab, Tabs } from 'react-tabs'

export default class App extends Component {
  render () {
    return (
      <div>
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
      </div>
    )
  }
}
