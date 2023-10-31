import styles from './button.module.css'

export default function Button({ text }) {
    return (
        <div className={styles.container}>
            <button type="submit" className={styles.button}>{text}</button>
        </div>
    )
}