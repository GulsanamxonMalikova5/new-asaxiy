import React from 'react'
import Card from '../../content/card/card'
import { Books } from '../../category/json/books'

const Kitob = () => {
  return (
    <React.Fragment>
      <div className="wrap">
        {Books.map((item) => {
          return (
            <Card key={item.id} item={item} />
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Kitob