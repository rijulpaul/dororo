import './Button.css'

function Button({ title }:{ title : string }) {
    return(
    <button className="button">{title}</button>
    )
}

export default Button
