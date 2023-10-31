export default function Label(props) {
    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.text}</label>
        </div>
    )
}