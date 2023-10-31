import Input from '@/components/Input/index.jsx'
import Label from '@/components/Label/index.jsx'
import TextArea from '../TextArea'
import styles from './form.module.css'
import Select from '../Select'
import Checkbox from '../Checkbox'
import Button from '../Button'

export default function Formulario() {
    return (
        <form className={styles.form}>
            <h1>Reservar Sala</h1>
            <Label
                htmlFor="nome"
                text="Descrição"
            />
            <TextArea
                type="text"
                name="Descrição"
                placeholder="Descrição"
                value=""
                onChange=""
            />
            <Label
                htmlFor="nome"
                text="Solicitante"
            />
            <Input
                type="text"
                name="Solicitante"
                placeholder="Solicitante"
                value=""
                onChange=""
            />
            <Label
                htmlFor="nome"
                text="Sala"
            />
            <Select
                name="Sala"
                placeholder="Sala"
                value=""
                onChange=""
            />
            <Label
                htmlFor="nome"
                text="Inicio"
            />
            <Input
                type="datetime-local"
                name="data-horario"
                placeholder=""
                value=""
                onChange=""
            />
            <Label
                htmlFor="nome"
                text="Fim"
            />
            <Input
                type="datetime-local"
                name="Fim"
                placeholder=""
                value=""
                onChange=""
            />
            <Checkbox
                type="checkbox"
                name="checkbox"
                value=""
                onChange=""
                htmlFor="check"
                text="concordo com os termos?"
            />
            <Button
                type="submit"
                name="submit"
                value="Enviar"
                onChange=""
                text="Reservar Sala"
            />
        </form>
    )
}