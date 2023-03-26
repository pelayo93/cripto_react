import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import imagen from '../criptos.png'
import Formulario from './components/Formulario.jsx'
import Cotizacion from './components/cotizacion'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  grid-template-columns: repat(2, 1fr);
  column-gap: 2rem;
  display: flex;
`
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
  width: 600px;
`
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-top-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`
export function App () {
  const [moneda, guardarMoneda] = useState('')
  const [criptomoneda, guardarCriptomoneda] = useState('')
  const [resultado, guardarResultado] = useState({})
  const [cargando, guardarCargando] = useState(false)

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (moneda === '') {
        return
      }
      // Consultar la api para obtener la cotizaxion;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const resultado = await axios.get(url)
      // Mostrar el Spinner
      guardarCargando(true)
      // Ocultar Spinner y Mostrar el Resultado
      setTimeout(() => {
        // Cqmbiar el estado de Spinner
        guardarCargando(false)
        // Guardar Cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
      }, 1000)
    }
    cotizarCriptomoneda()
  }, [moneda, criptomoneda])

  // Mostrat Spinner o Resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt='imagen cripto' />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
        {componente}
      </div>
    </Contenedor>
  )
}
