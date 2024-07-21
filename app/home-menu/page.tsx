import Link from 'next/link'
import React from 'react'
import styles from './HomeMenu.module.css'

const HomeMenu = () => {
  return (
    <div className=''>
      <div>Ultimate Tic Tac Toe</div>
      <Link href="/game-offline" className=''><div>Play Offline</div></Link>
      <Link href="/game-online"><div>Play Online</div></Link>
    </div>
  )
}

export default HomeMenu