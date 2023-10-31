import styles from './button.module.css'

export default function Button(props) {
    return (
        <div className={styles.container}>
            <button className={styles.button}
                type={props.type}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            >
                {props.text}
            </button>
        </div>
    )
}