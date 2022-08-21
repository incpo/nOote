import { Columns, Heading } from "react-bulma-components";

export default function About () {


    return(
        <Columns centered>
            <Columns.Column size='4'>
                <div style={styles.imgContainer}><img src="/icons/about.png" alt="" /></div>
            </Columns.Column>
            <Columns.Column size='4'>
                <div className="about-container">
                    <span style={styles.miniSpan}>About project</span>
                    <Heading my='2' textColor="black">What is n<span style={{color: '#006AFF'}}>Oo</span>te?</Heading>
                    <p>nOote - free service that help you to create secret note. We will help you keep your note secret. The message can only be viewed once! Thanks to this, no outsider will know about your secrets.</p>
                    <button onClick={()=> window.location.href='/create'} style={{marginTop: '2rem'}} className="btn-main">Create!</button>
                </div>
            </Columns.Column>       
        </Columns>
    )
}

const styles = {
    miniSpan: {
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        color: '#006AFF',
    },
    imgContainer: {
        justifyContent: 'center',
        display: 'flex'
    }
}