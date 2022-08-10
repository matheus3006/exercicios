export default function Titulo({principal, secundario, isPequeno}){
   return isPequeno ? (
    <>
        <p>{principal}</p>
        <p>{secundario}</p>
    </>
    )
    :
    (
    <>
        <h1>{principal}</h1>
        <h2>{secundario}</h2>
    </>
   ) 
}