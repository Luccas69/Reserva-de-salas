import styles from '@/components/Input/Input.module.css'

export default function Input(props) {
    return (
        <div className={styles.input}>
            <input
                type={props.type}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} 
                />
        </div>
    )
}