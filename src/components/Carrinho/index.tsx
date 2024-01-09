import React from 'react'
import styles from './Carrinho.module.scss'
import Produto from '../Produto'
import Botoes from '../Botoes'

export default function Carrinho() {
  return (
      <div className={styles.container}>
          <div className={styles.header}>
              <p className={styles.header__text}>Seu carrinho tem 5 itens</p>
          </div>
      <Produto />
      <Botoes/>
    </div>
  )
}
