import "./MyButton.css"

function MyButton(props) {

    // Puedo hacer una constante al objeto con la propiedad, o directamente agregar el objeto al estilo: style={ { backgroundColor: props.color } }
    const styleButton = { backgroundColor: props.color }

    // Para las clases usamos className, no class
    return <button style={styleButton} className="btn">{props.text}</button>
}

// props se llama así por convención, y se encarga de recibir las propiedades del objeto

export default MyButton;