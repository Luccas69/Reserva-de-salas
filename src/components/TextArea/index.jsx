import styles from './textarea.module.css'

export default function TextArea(props) {
    return (
        <div className={styles.textarea}>
            <textarea 
                type={props.type}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}