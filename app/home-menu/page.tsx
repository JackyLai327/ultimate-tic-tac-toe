import Link from 'next/link'
import React from 'react'
import styles from './HomeMenu.module.css'

const HomeMenu = () => {
  return (
    <div className=''>
      <div>Ultimate Tic Tac Toe</div>
      <Link href="/game/game-offline"><div>Play Offline</div></Link>
      <div className='cursor-not-allowed opacity-70'><div>Play Online</div></div>
    </div>
  )
}

export default HomeMenu