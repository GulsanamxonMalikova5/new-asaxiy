import React from 'react'
import Card from '../../content/card/card'
import {Kond} from '../../category/json/kond.js'

const MainKond = () => {

  console.log("dasdsad",Kond)
  return (
    <React.Fragment>
      <div className="wrap">
        {Kond.map((item) => {
          return (
            <Card key={item.id} item={item} />
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default MainKond