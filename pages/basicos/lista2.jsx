export default function lista2() {
  return (
    <div>
     {gerarLista(20)}
    </div>
  );
}

function gerarLista(final = 10){
  const lista = [

  ]
  for(let i = 0; i <= final ; i++){
    lista.push(<span>{i+1},</span>)
  }

  return lista
}