import React from 'react'
import Card from '../../content/card/card'
import { Tvi } from '../../category/json/tv.js'

const Televizor = () => {
  return (
    <React.Fragment>
        {Tvi.map((item) => {
          return (
            <Card key={item.id} item={item} />
          )
        })}
    </React.Fragment>
  )
}

export default Televizor