import Cabecalho from "@/components/Cabecalho";
import Formulario from "@/components/Formulario";
import Tabela from "@/components/Tabela";
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Cabecalho />
      <div className={styles.body}>
        <Formulario btnText="Reservar Sala" />
        <Tabela />
      </div>
    </div>
  )
}