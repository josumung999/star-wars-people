import { Loading } from '@nextui-org/react'
import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='App'>
      <div className="App-header">
        <Loading type='spinner' size='lg' />
      </div>
    </div>
  )
}

export default LoadingSpinner