import env from '../assets/env.json';
import { Heading } from "react-bulma-components";
import { useState } from 'react';
import { Layout } from "./MultiUsing/Layout";
import { CreatorField } from "./MultiUsing/CreatorField";
import Loading from './MultiUsing/Loading';

export default function Create () {
    const [url,setUrl] = useState();
    const [result,setResult] = useState('hide');
    const [aHideClass, setAhideClass] = useState('hide');
    const [hideClass,setHideClass] = useState('');
    const [requestLoad, setRequestLoad] = useState(false);

    const getData = (e) => {
        e.preventDefault();
        let note = e.target.elements.note.value.trim()
        if(note === '') {
            alert('Заполни все поля!')
            return false;
        }
        sendData({'note': note})
    }

    const sendData = (obj) =>{
        setResult('')
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(obj)
        })
        .then(response=> response.json())
        .then(response=> {
            if (response.result) {
                setUrl(response.url);
                setRequestLoad(true);
                setHideClass('hide');
                setAhideClass('');
            }
        });
    }



    return(
        <Layout>
              <form onSubmit={getData}>
                   <CreatorField labelTitle={<><b>Welcome to note creator!</b> Write your note below and press create.</>} />
                    <div className={hideClass}>
                        <textarea placeholder='Max note lenght is 1000 symbols' required name="note" id="note" style={styles.textArea} maxLength='1000' />
                    </div>

                    <div className='btn-container' style={{textAlign: 'center'}}>
                        <button className={hideClass} type='submit'>Create</button>
                        <button className={aHideClass} type="reset" onClick={()=> window.location.reload()}>Create new one</button>
                    </div>
                </form>

                <div className={result} style={styles.resultLink} >
                    {(!requestLoad) ? (
                        <Loading/>
                    ) : 
                    <div>
                        <div style={styles.linkField}>
                            <h3>Share this link with recipient:</h3>
                            <a style={{wordWrap: 'break-word'}} href={env.url+'/'+url}>{env.url}/{url}</a>
                        </div>
                        <div style={styles.linkField}>
                            <h3>Recipient also can find your note by hash: <br /><p style={{color:'#485fc7'}}>{url}</p></h3>
                        </div>
                    </div>
                    }
                </div>

                <div id='anchor' style={styles.warning}>
                    <Heading textColor='black'>Warning!</Heading>
                    <Heading textWeight='normal' textColor='black' size='5' mt='2' subtitle>After reading the note, it will be automatically deleted!</Heading>
                </div>
        </Layout>
    )


}

const styles = {
    resultLink: {
        textAlign: 'center',
    },
    linkField: {
        backgroundColor: '#006aff2c',
        borderRadius: '0.325rem',
        marginTop: '1rem'
    },
    textArea: {
        width: '100%',
        height: '10rem',
        resize: 'none',
        fontSize: '1.2rem',
        outline: 'none',
        padding: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    },
    warning: {
        textAlign: 'center',
        borderRadius: '0.625rem',
        padding: '1rem',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.149)',
        margin: '2rem auto',
    },


}