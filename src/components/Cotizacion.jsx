import styled from '@emotion/styled'
import React from 'react'

const ResultadoDiv = styled.div`
color: black;
background: white;
border-radius: 5px;
font-family: Arial, Helvetica, sans-serif;
`
const Info = styled.p`
    font-size: 18px;
    padding: 5px 5px;
    span{
      font-weight: bold;
    }
`

const Precio = styled.p`
    font-size: 30px;
    padding: 5px 5px;
    span{
      font-weight: bold;
    }
`

function Cotizacion ({ resultado }) {
  if (Object.keys(resultado).length === 0) {
    return null
  }
  console.log(resultado)
  return (
    <ResultadoDiv>
      <Precio>Precio es: <span>{resultado.PRICE}</span></Precio>
      <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
      <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
      <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
      <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span></Info>
    </ResultadoDiv>
  )
}

export default Cotizacion
