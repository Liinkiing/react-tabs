import * as React from 'react'
import styled from 'styled-components'

interface ITabsContext {
  selectedTabIndex: number
}

interface Props {
  readonly initialTabIndex?: number
}

const TabsOuter = styled.div``

const TabsInner = styled.div`
  display: flex;
  position: relative;
  & > .tab {
    flex: 1;
  }
`

const TabsContent = styled.div.attrs({
  className: 'tabs__content'
})`
  padding: 20px;
`

export const TabsContext = React.createContext<ITabsContext>({selectedTabIndex: 0})

const Tabs: React.FC<Props> = ({children, initialTabIndex}) => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(initialTabIndex!)
  const elements = React.useMemo(
    () => React.Children.toArray(children).map((el: any, index: number) =>
      React.cloneElement(el, {isActive: selectedTabIndex === index, onClick: () => { setSelectedTabIndex(index) }})
    ),
    [children, selectedTabIndex]
  )
  return (
    <TabsContext.Provider value={{selectedTabIndex}}>
      <TabsOuter>
        <TabsInner>
          {elements}
        </TabsInner>
        <TabsContent/>
      </TabsOuter>
    </TabsContext.Provider>
  )
}

Tabs.defaultProps = {
  initialTabIndex: 0
}

export default Tabs
