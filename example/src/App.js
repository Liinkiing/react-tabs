import React, {Component} from 'react'

import {Tab, Tabs} from '@liinkiing/react-tabs'

export default class App extends Component {
  render () {
    return (
      <div>
        <div style={{margin: '20px auto', width: '80%'}}>
          <Tabs
            verticalLayout
            initial={{opacity: 0, x: 500}}
            exit={{opacity: 0, x: 500}}
          >
            <Tab>
              <Tab.Title>First tab</Tab.Title>
              <Tab.Content>First Content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
          </Tabs>
        </div>
        <div style={{margin: '20px auto', width: '80%'}}>
          <Tabs
          >
            <Tab>
              <Tab.Title>First tab</Tab.Title>
              <Tab.Content>First Content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>NESTED WITH STRETCHED TABS TITLE</Tab.Title>
              <Tab.Content>
                <Tabs
                  stretchTabsTitle
                  initial={{opacity: 0, x: 500}}
                  exit={{opacity: 0, x: 500}}
                >
                  <Tab>
                    <Tab.Title>First tab</Tab.Title>
                    <Tab.Content>First Content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>MOARRR NESTED</Tab.Title>
                    <Tab.Content>
                      <Tabs
                        verticalLayout
                        initial={{opacity: 0, x: 500}}
                        exit={{opacity: 0, x: 500}}
                      >
                        <Tab>
                          <Tab.Title>First tab</Tab.Title>
                          <Tab.Content>First Content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                      </Tabs>

                    </Tab.Content>
                  </Tab>
                </Tabs>

              </Tab.Content>
            </Tab>
          </Tabs>
        </div>
        <div style={{margin: '20px auto', width: '80%', display: 'flex'}}>
          <Tabs
            style={{flex: 1}}
          >
            <Tab>
              <Tab.Title>First tab</Tab.Title>
              <Tab.Content>First Content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>NESTED</Tab.Title>
              <Tab.Content>
                <Tabs
                  initial={{opacity: 0, x: 500}}
                  exit={{opacity: 0, x: 500}}
                >
                  <Tab>
                    <Tab.Title>First tab</Tab.Title>
                    <Tab.Content>First Content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>MOARRR NESTED</Tab.Title>
                    <Tab.Content>
                      <Tabs
                        verticalLayout
                        initial={{opacity: 0, x: 500}}
                        exit={{opacity: 0, x: 500}}
                      >
                        <Tab>
                          <Tab.Title>First tab</Tab.Title>
                          <Tab.Content>First Content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                      </Tabs>

                    </Tab.Content>
                  </Tab>
                </Tabs>

              </Tab.Content>
            </Tab>
          </Tabs>
          <Tabs
            style={{flex: 1}}
            verticalLayout
          >
            <Tab>
              <Tab.Title>First tab</Tab.Title>
              <Tab.Content>First Content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>Second tab</Tab.Title>
              <Tab.Content>Second content</Tab.Content>
            </Tab>
            <Tab>
              <Tab.Title>NESTED</Tab.Title>
              <Tab.Content>
                <Tabs
                  initial={{opacity: 0, x: 500}}
                  exit={{opacity: 0, x: 500}}
                >
                  <Tab>
                    <Tab.Title>First tab</Tab.Title>
                    <Tab.Content>First Content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>Second tab</Tab.Title>
                    <Tab.Content>Second content</Tab.Content>
                  </Tab>
                  <Tab>
                    <Tab.Title>MOARRR NESTED</Tab.Title>
                    <Tab.Content>
                      <Tabs
                        verticalLayout
                        initial={{opacity: 0, x: 500}}
                        exit={{opacity: 0, x: 500}}
                      >
                        <Tab>
                          <Tab.Title>First tab</Tab.Title>
                          <Tab.Content>First Content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                        <Tab>
                          <Tab.Title>Second tab</Tab.Title>
                          <Tab.Content>Second content</Tab.Content>
                        </Tab>
                      </Tabs>

                    </Tab.Content>
                  </Tab>
                </Tabs>

              </Tab.Content>
            </Tab>
          </Tabs>
        </div>

      </div>
    )
  }
}
