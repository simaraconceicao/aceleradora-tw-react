const LowerCase = (props) => {
  const textoInserido = props.text
  const textoLower = textoInserido.toLowerCase()
  return (
    <p>{textoLower}</p>
  )
}

export default LowerCase