const UpperCase = (props) => {
  const textoInserido = props.text
  const textoUpperCase = textoInserido.toUpperCase()
  return(
    <p>{textoUpperCase}</p>
  )
}

export default UpperCase