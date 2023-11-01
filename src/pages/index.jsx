import Cabecalho from "@/components/Cabecalho";
import Formulario from "@/components/Formulario";
import Tabela from "@/components/Tabela";
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Cabecalho />
      <div className={styles.home}>
        <div className={styles.form}>
          <Formulario btnText="Reservar Sala" />
        </div>
        <div className={styles.tabela}>
          <Tabela />
        </div>
      </div >
    </div>
  )
}