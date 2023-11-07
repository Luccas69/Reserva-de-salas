import Input from '@/components/Input/index.jsx'
import Label from '@/components/Label/index.jsx'
import TextArea from '../TextArea'
import styles from './form.module.css'
import Select from '../Select'
import Checkbox from '../Checkbox'
import Button from '../Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Message from '../Mensagem'


export default function Formulario({ btnText }) {

    const [termos, setTermos] = useState(false)

    const [categories, setCategories] = useState([])

    const [salas, setSalas] = useState({
        descricao: '',
        solicitante: '',
        inicio: '',
        fim: '',
    })

    const [message, setMessage] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3001/categories')
            .then((response) => {
                setCategories(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handleCategory(e) {
        setSalas({
            ...salas,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    function inserirSala(e) {
        e.preventDefault()
        console.log(salas)

        if (!termos) {
            setMessage({ type: 'error', text: 'Aceite os termos' });
            console.log('Aceite os termos')
            return;
        }

        function limparCampos() {
            setSalas({
                descricao: '',
                solicitante: '',
                inicio: '',
                fim: '',
            })
        }

        axios.post('http://localhost:3001/salas', salas)
            .then((response) => {
                setMessage({ type: 'success', text: 'Agendamento realizado com sucesso!' });
                console.log(response.data)
                limparCampos();

                setTimeout(() => {
                    window.location.reload();
                }, 3000);


            })
            .catch((err) => {
                setMessage({ type: 'error', text: 'Ocorreu um erro no seu agendamento.' });
                console.log(err)
            })

    }

    function aceitarTermos(e) {
        setTermos(e.target.checked)
    }


    return (
        <div>
            <form onSubmit={e => inserirSala(e)} className={styles.form}>
                <h1>Reservar Sala</h1>

                {message && (
                    <Message type={message.type} text={message.text} />)}

                <Label
                    htmlFor="nome"
                    text="Descrição"
                />
                <TextArea
                    type="text"
                    name="Descrição"
                    placeholder="Descrição"
                    value={salas.descricao}
                    onChange={(e) => setSalas({ ...salas, descricao: e.target.value })}
                />
                <Label
                    htmlFor="nome"
                    text="Solicitante"
                />
                <Input
                    type="text"
                    name="Solicitante"
                    placeholder="Solicitante"
                    value={salas.solicitante}
                    onChange={(e) => setSalas({ ...salas, solicitante: e.target.value })}
                />
                <Label
                    htmlFor="nome"
                    text="Sala"
                />
                <Select
                    name="category_id"
                    text="Selecione uma sala"
                    options={categories}
                    value={salas.category?.id}
                    onChange={handleCategory}
                />
                <Label
                    htmlFor="nome"
                    text="Inicio"
                />
                <Input
                    type="datetime-local"
                    name="data-horario"
                    placeholder=""
                    value={salas.inicio}
                    onChange={(e) => setSalas({ ...salas, inicio: e.target.value })}
                />
                <Label
                    htmlFor="nome"
                    text="Fim"
                />
                <Input
                    type="datetime-local"
                    name="Fim"
                    placeholder=""
                    value={salas.fim}
                    onChange={(e) => setSalas({ ...salas, fim: e.target.value })}
                />
                <Checkbox
                    type="checkbox"
                    name="checkbox"
                    value=""
                    onChange={aceitarTermos}
                    htmlFor="check"
                    text="concordo com os termos?"
                />
                <Button
                    text={btnText} />
            </form>
        </div>
    )
}