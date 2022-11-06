import Popup from 'reactjs-popup'

export const TitleModal = ({item}) => (
    <Popup trigger={<h2>{item.title}</h2>}
    modal 
    nested>
        {(close) => (
        <div className='modal'>
            <div className='buttonDiv'>
                <button onClick={close}>❌</button>
            </div>
            <div className='modalContainer'>
                <img className='imgModal' src={item.images['Poster Art'].url} alt='poster art' />
                <div className='textDiv'>
                    <h2 className='titleModal'>{item.title}</h2>
                    <p>{item.releaseYear}</p>
                    <p>{item.description}</p>
            </div>
            </div>
        </div>
        )}
    </Popup>
);