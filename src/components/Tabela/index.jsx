import styles from './Tabela.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Tabela() {

    const [salas, setSalas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/salas')
            .then((response) => {
                setSalas(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function formatarData(data) {
        const dataFormatada = new Date(data)
        const dia = dataFormatada.getDate().toString().padStart(2, '0')
        const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0')
        const ano = dataFormatada.getFullYear()
        const hora = dataFormatada.getHours().toString().padStart(2, '0')
        const minuto = dataFormatada.getMinutes().toString().padStart(2, '0')
        const segundo = dataFormatada.getSeconds().toString().padStart(2, '0')

        return `${dia}/${mes}/${ano} às ${hora}:${minuto}:${segundo}`
    }

    return (
        <>
            <div className={styles.title}>
                <img src="date.png" alt="date" />
                <h1>
                    Reservas realizadas: {salas.length}
                </h1>
            </div>
            <div className={styles.container}>
                <table className={styles.table}>
                    <thead className={styles.head}>
                        <tr>
                            <th>Descrição</th>
                            <th>Solicitante</th>
                            <th>Sala</th>
                            <th>Início</th>
                            <th>Fim</th>
                        </tr>
                    </thead>
                    <tbody className={styles.body}>
                        {salas.map((salas) => (
                            <tr key={salas.id}>
                                <td>{salas.descricao}</td>
                                <td>{salas.solicitante}</td>
                                <td>{salas.category?.name}</td>
                                <td>{formatarData(salas.inicio)}</td>
                                <td>{formatarData(salas.fim)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}