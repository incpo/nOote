import { Container, Heading } from "react-bulma-components";
import { Layout } from "./MultiUsing/Layout";

export default function Main () {

    return(
        <Layout>
             <Container textAlign='center'>
                    <Heading color="black" size='3'>The note creator <br />that keeps your message a secret</Heading>
                    <Heading mt='0' subtitle>Write a poem and we will keep it in complete secrecy. Only the recipient will see it :) </Heading>
                    <Container mb='5'>
                        <img  src="/icons/main_page.png" alt="nOote" />
                    </Container >
                    <button onClick={()=> window.location.href='create'} className="btn-main">Create note</button>
                </Container>
        </Layout>
    )
}