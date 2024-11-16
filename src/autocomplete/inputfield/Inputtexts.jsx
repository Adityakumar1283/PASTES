import './style.css'

import React from 'react'

const Inputtexts = ({value,onChange}) => {
  function handleChange(e){
      onChange(e.target.value)
  }
  return (
    <input
        type='text'
        placeholder='Enter Todo'
        onChange={handleChange}
        value={value}
    
    />
    
  )
}

export default Inputtexts

