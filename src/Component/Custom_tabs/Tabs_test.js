import React from 'react'
import Tabs from './Tabs'
import './tabs.css'

function RandomComponent(){
    return <h1>Some random content</h1>
}

const Tabs_test = () => {
    const tabs = [
        {
            label:'Tab 1',
            content: <div>This is content for Tab 1</div>
        },
        {
            label:'Tab 2',
            content: <div>This is content for Tab 2</div>
        },
        {
            label:'Tab 3',
            content: <RandomComponent/>
        }
    ]

    const handleChange = (currentTabIndex) =>{

    }
  return (
    <>
        <Tabs tabsContent={tabs} onChange={handleChange}/>
    </>
  )
}

export default Tabs_test