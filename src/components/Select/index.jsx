import styles from './select.module.css'

export default function Select(props) {
    return (
        <div className={styles.select}>
            <select
                id={props.name}
                value={props.value}
                onChange={props.onChange}
            >
                <option value="" disabled>{props.placeholder}</option>
            </select>
        </div>
    )
}