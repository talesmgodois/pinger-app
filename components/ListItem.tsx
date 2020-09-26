import React from 'react'
import Link from 'next/link'

import { Pinger } from '../interfaces'
import { Card, CardContent, Typography } from '@material-ui/core'
import StyleBox from './StyleBox'

type Props = {
  pinger: Pinger
}

const style = {
  backgroundColor: 'rgb(5, 6, 10)',
  width:'100%'  
}

const ListItem = ({ pinger }: Props) => {
  return (
    <>
      <StyleBox style={style}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {pinger.name}
          </Typography>
        </CardContent>
      </StyleBox>
    </>
  )
}

export default ListItem
