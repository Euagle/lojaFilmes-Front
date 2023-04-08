
import { OneCard, Container } from "./styled"
export const CardFilmes=(props)=>{
    console.log('props', props)

    return(
        <Container>
            <OneCard>
        <p> Nome: {props.filme.name}</p>
        <p> Categoria: {props.filme.category}</p>
            </OneCard>
           


    </Container>
    )
   
}