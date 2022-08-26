import logo from '../../assets/icons/logo.png'

export const CreatorField = ({labelTitle}) => {
    return(
        <>
            <div className='creator-field'>
                <div><img width='64' src={logo} alt="create" /></div>
                <label style={{paddingTop: '0.313rem', marginLeft: '1rem'}} htmlFor='note'>{labelTitle}</label>
            </div>
        </>
    )
}

