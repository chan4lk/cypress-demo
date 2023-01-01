import { ReactElement } from 'react'
import Header from '../components/header/Header'

import '../styles/globals.css'
import styles from '../styles/RootLayout.module.css'
type Props = {
  children: ReactElement
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <Header />
          <div className={styles.page}>{children}</div>
        </main>
      </body>
    </html>
  )
}
