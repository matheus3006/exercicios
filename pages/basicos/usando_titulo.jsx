import Titulo from '../../components/TItulo'

export default function usandoTitulo(){
    return (
        <div>
            <Titulo
                principal="Este é o titulo" 
                secundario="Este é meu subtitulo" 
            />
            <Titulo 
                principal="primario"
                secundario="secundario"
                isPequeno
            />

        </div>
    )
} 