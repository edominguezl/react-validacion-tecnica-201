interface Level2Props {
    sabor: string
    onSaborChange: (nuevoSabor:string) => void
}

const Level2 = ({sabor, onSaborChange}:Level2Props) => {
    const clickHandler =  () => {
        onSaborChange("Limón")
    }
        
    return <>
        {sabor}
        <button onClick={clickHandler}>Cambiar sabor</button>
    </>
}

export default Level2
