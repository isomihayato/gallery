import { useState, useEffect } from 'react'
import Card from 'Molecules/Surfaces/Card'
import AxiosWrapper from '../functions/AxiosWrapper'

type Item = {
  name: string
  image?: {
    url: string
  }
  introduce: string
  created_at: string
}

function Init(callback: any) {
  useEffect(() => {
    AxiosWrapper(
      'GET',
      '/api/v1/items',
      (res: any) => {
        console.log(res)
        callback(res.items)
      },
      () => {},
    )
  })
}

export default function CardsComponent() {
  const [items, setItems] = useState([])
  Init((items: any) => setItems(items))
  const cardList = items.map((item: Item) => {
    return (
      <>
        <Card
          title={item.name}
          created={item.created_at}
          image={item.image?.url}
          introduce={item.introduce}
        />
      </>
    )
  })
  return <>{cardList}</>
}
CardsComponent.defaultProps = {}
