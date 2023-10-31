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



    return (
        <div className={styles.tabela}>
            <h1>
                Reservas realizadas:
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Solicitante</th>
                        <th>Sala</th>
                        <th>Início</th>
                        <th>Fim</th>
                    </tr>
                    <tr>
                        <td>Aula de Frameworks</td>
                        <td>José da Silva</td>
                        <td>Bloco A - Lab. de Informática</td>
                        <td>25/10/2023 às 19:00:00</td>
                        <td>25/10/2023 às 20:00:00</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}