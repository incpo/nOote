export const CreatorField = ({labelTitle}) => {
    return(
        <>
            <div className='creator-field'>
                <div><img width='64' src="/icons/logo.png" alt="" /></div>
                <label style={{paddingTop: '0.313rem', marginLeft: '1rem'}} htmlFor='note'>{labelTitle}</label>
            </div>
        </>
    )
}

