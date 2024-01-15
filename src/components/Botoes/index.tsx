import React from 'react'
import styles from './Botoes.module.scss'


export default function Botoes() {
  return (
      <div className={styles.container}>
          <button className={styles.botao} id="adicionar">Adicionar</button>
          <button className={styles.botao} id="limpar">Limpar</button>          
    </div>
  )

  
}
