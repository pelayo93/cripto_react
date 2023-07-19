import React from 'react'
import styled from '@emotion/styled'

const MensajeError = styled.p`
  background-color: #B7322C;
  color: #FFF;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;
`

function Error ({ mensaje }) {
  return (
    <MensajeError>{mensaje}</MensajeError>
  )
}

export default Error
