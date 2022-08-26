import { useEffect, useState } from "react"
import { Heading } from "react-bulma-components";
import { useParams } from "react-router-dom"
import { Layout } from "./MultiUsing/Layout";
import { CreatorField } from "./MultiUsing/CreatorField";
import Loading from "../Components/MultiUsing/Loading";
import errorImage from '../assets/icons/noteWillbeHere.png'
import env from '../assets/env.json';

export default function Note () {
    const [error, setError] = useState('hide');
    const [result, setResult] = useState('hide');
    const [hashReader, setHashReader] = useState('');
    const [invsee, setInvsee] = useState('hide');
    const [dataText, setDataText] = useState('');
    const [HashAnimation, setHashAnimaton] = useState('');
    const [loader,setLoader] = useState(false)

    let { url } = useParams()
    
    const readHash = (e) => {
        console.log(e);
        e.preventDefault();
        let hash = e.target.elements.url.value.trim();
        if(hash === '') {
            alert('ВВЕДИ ЗНАЧЕНИЕ');
            return false;
        }
        window.location.href=env.url+'/'+hash
    }

    useEffect(()=> {
        if( url !== undefined ) {
            setInvsee('')
            setHashReader('hide');
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {"Content-Type": "application/x-www-form-urlencoded",},
                body: JSON.stringify({url: url})
            })
            .then(response=> response.json())
            .then(response=> {
                setLoader(true)
                if(response.result) {
                    setDataText(response.note);
                    setResult('');
                    setHashAnimaton('findHash')
                } else {
                    setError('');
                    setDataText('');
                    setHashAnimaton('wrongHash')
                }
            })
        }
    }, [url])


    return(

        <Layout>
           <form onSubmit={readHash}>
                <CreatorField
                labelTitle={<p><b>Welcome to note reader!</b> Enter your hash in field and press the button.</p>
                }/> 
                <div className='hashInput' style={styles.div}> 
                    <div className={hashReader}> 
                        <input minLength='5' autoComplete="off" required type="text" name="url" id="url" placeholder='Hash code here'/>
                        <button type="submit">Read note hash</button>
                    </div>
                    <div className={invsee}><button onClick={()=> window.location.href=env.url}>Try again</button></div>
                    <br />
                    <div className={invsee}>
                        <Heading mt='' mb='2' pb='0'>Note:</Heading>
                        {!loader ?                         
                        <Loading/> : 
                        <div style={styles.noteField}>
                            <div className={`${error} ${HashAnimation}`}>
                                <p style={styles.warning}>There is no such hash.</p>
                                <img src={errorImage} alt="" />
                            </div>
                            <div className={`${result} ${HashAnimation}`} >
                                <textarea disabled style={styles.textArea} name="noteMessage" id="noteMessage" defaultValue={dataText} />
                            </div>
                        </div>
                        }
                    </div>
                    <p style={styles.warning}>After reloading the page message will be deleted.</p>
                </div>
            </form>
        </Layout>
    )
}

const styles = {
    textArea: {
        resize: 'none',
        minHeight: '20rem',
        height: 'auto',
        fontSize: '1.2rem',
        outline: 'none',
        width: '100%',
        padding: '1rem',
        borderBottom: 'none',
        position: 'relative',
        overflowY: 'scroll'
    },
    noteField: {
        width: '100%',
        position: 'relative',
        minHeight: '20rem',
        maxHeight: 'auto',
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    },
    warning: {
        padding: '0.7rem 0 0 0', fontSize: '1.1rem', fontWeight: '600', color: 'red'
    },
    div: {boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',}
}
