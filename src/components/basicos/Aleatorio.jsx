function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

export default (props) =>
    <>
        Número aleatório entre {props.Min} e {props.Max}: {randomNumber(props.Min, props.Max)}
    </>