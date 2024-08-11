import React from 'react'
import InnerBoard from './InnerBoard'

const OuterBoard = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='grid grid-cols-3 grid-rows-3 gap-5'>
        <div className="row-start-1 col-start-1"><InnerBoard /></div>
        <div className="row-start-1 col-start-2"><InnerBoard /></div>
        <div className="row-start-1 col-start-3"><InnerBoard /></div>
        <div className="row-start-2 col-start-1"><InnerBoard /></div>
        <div className="row-start-2 col-start-2"><InnerBoard /></div>
        <div className="row-start-2 col-start-3"><InnerBoard /></div>
        <div className="row-start-3 col-start-1"><InnerBoard /></div>
        <div className="row-start-3 col-start-2"><InnerBoard /></div>
        <div className="row-start-3 col-start-3"><InnerBoard /></div>
      </div>
    </div>
  )
}

export default OuterBoard