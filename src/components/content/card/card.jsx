import React from 'react'
import './card.scss'
import Star from './img/star.svg'
import Chat from './img/chat.svg'
import Cart from  './img/cart.svg'

const Card = (props) => {
    return (
        <React.Fragment>
            {/* <div className="wrap"> */}
                {/* card */}
                <div className="card" >
                    {/* Card img */}
                    <div className="card__img">
                        <img src={props.item.image} alt="picture" width={150} height={150} />
                    </div> {/*end */}
                    {/* card title */}
                    <div className="card__title">
                        <p>{props.item.name}</p>
                    </div>
                    {/* star */}
                    <div className="card__star">
                        <img src={Star} alt="icon" width={100} />
                        <div className="card__chat">
                            <img src={Chat} alt="icon" width={30} /><p>{props.item.feedback}</p>
                        </div>
                    </div>
                    {/* narx */}
                    <div className="card__narx">
                        <p>{props.item.price}</p>
                        <img src={Cart} alt="icon" width={30} height={30} />
                    </div>
                    {/* buttons */}
                    <div className="card__btns">
                        <button className='card__r'>Rassrochka</button>
                        <button className='card__b'>Bir clickda olish</button>
                    </div>

                </div>
            {/* </div> */}
        </React.Fragment>
    )
}

export default Card