import { Heading } from "react-bulma-components";
import { Layout } from "./MultiUsing/Layout";

export default function Error () {

    return(
        <Layout>
            <div style={{textAlign: 'center'}}>
            <img src="/icons/error.png" alt="no such page" />
            <Heading>Error 404</Heading>
            <Heading subtitle>No such a page.</Heading>
            </div>
        </Layout>
    )
}