import React from 'react'
import styles from './InnerBoard.module.css'

const InnerBoard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-3 gap-0">
        <div id={styles.topLeft} className={`${styles.cellSize} row-start-1 col-start-1`}>1</div>
        <div id={styles.top} className={`${styles.cellSize} row-start-1 col-start-2`}>2</div>
        <div id={styles.topRight} className={`${styles.cellSize} row-start-1 col-start-3`}>3</div>
        <div id={styles.left} className={`${styles.cellSize} row-start-2 col-start-1`}>4</div>
        <div id={styles.center} className={`${styles.cellSize} row-start-2 col-start-2`}>5</div>
        <div id={styles.right} className={`${styles.cellSize} row-start-2 col-start-3`}>6</div>
        <div id={styles.botLeft} className={`${styles.cellSize} row-start-3 col-start-1`}>7</div>
        <div id={styles.bot} className={`${styles.cellSize} row-start-3 col-start-2`}>8</div>
        <div id={styles.botRight} className={`${styles.cellSize} row-start-3 col-start-3`}>9</div>
      </div>
    </div>
  )
}

export default InnerBoard