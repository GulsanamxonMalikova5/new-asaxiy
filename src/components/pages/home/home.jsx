import React from 'react'
import './Home.scss'
import Card from '../../content/card/card'
import { AllData } from '../../category/json/all'

const Home = () => {
  return (
    <React.Fragment>
      <div className="wrap">
        {AllData.map((item)=>{
          return(
            <Card key={item.id} item={item}/>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Home


{/* < div className = "card" >
    < div className = "card__img" >
      <img src={all.img} />
    </div >
<div className="card__title">
  <p>{all.title}</p>
</div>
<div className="card__star">
  <img src={Star} alt="icon" width={100} />
  <div className="card__chat">
    <img src={Chat} alt="icon" width={30} /><p></p>
  </div>
</div>
<div className="card__narx">
  <p>{all.price}</p>
  <img src={Cart} alt="icon" width={30} height={30} />
</div>

</div > */}