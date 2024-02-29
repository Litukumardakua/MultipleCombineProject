import React from 'react'
import { useState } from 'react'
import Model from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const ReactModel = () => {

    const [modelIsOpen, setModelIsOpen] = useState(false)
  return (
    <div>
        <button onClick={()=> setModelIsOpen(true)}>model open</button>
        <Model isOpen={modelIsOpen} 
        onRequestClose={() => setModelIsOpen(false)}
        style={customStyles}
        shouldCloseOnOverlayClick={false}>
           <h2>model open</h2>
           <p>model content</p>
           <button onClick={()=> setModelIsOpen(false)}>close</button>
        </Model>
    </div>
  )
}

export default ReactModel