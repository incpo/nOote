export default function Form({onSubmitF,labelTitle,sumbitBtn}) {
    return(
    <Columns centered >
        <Columns.Column size='10'>
            <form onSubmit={onSubmitF}>
                <div className='creator-field'>
                    <div><img width='64' src="/icons/logo.png" alt="" /></div>
                    <label style={styles.label} htmlFor='note'><b>Welcome to note creator!</b>{labelTitle}</label>
                </div>
                <div className={hideClass}>
                    <textarea required name="note" id="note" style={styles.textArea} />
                </div>

                <div className='btn-container' style={{textAlign: 'center'}}>
                    {sumbitBtn}
                </div>
            </form>
        </Columns.Column>
    </Columns>
    )
}
const styles = {
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
    label: {
        paddingTop: '0.313rem',
        marginLeft: '1rem'
    },

}