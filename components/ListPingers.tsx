import * as React from 'react'
import ListItem from './ListItem'
import { Pinger } from '../interfaces'

type Props = {
  items: Pinger[]
}

const style = {
  li: {
    minWidth: 320
  },
  ul: {
    display: 'flex',
    padding: 0,
    'flex-wrap':'wrap'
  }
}

export const ListPingers = ({ items }: Props) => (
  <ul style={style.ul}>
    {items.map((item) => (
      <li key={item.id} style={style.li}>
        <ListItem pinger={item} />
      </li>
    ))}
  </ul>
)
