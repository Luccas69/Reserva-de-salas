import styles from './select.module.css'

export default function Select({ name, options, value}) {
    return (
        <div className={styles.select}>
            <select
                id={name}
                name={name}
            >
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}