const Add =(props)=>{
    return(
     <div>
      
        <p>this is add</p>
        <p>addition={parseInt( props.a)+ parseInt( props.b)}</p>
        <p>addition={props.a+props.b}</p>
        </div>
    )
}
export default Add;