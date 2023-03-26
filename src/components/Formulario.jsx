import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda.jsx'
import useCriptomoneda from '../hooks/useCriptomoneda.jsx'
import Error from './Error.jsx'
import Axios from 'axios'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    fonst-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3 ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`

function Formulario ({ guardarMoneda, guardarCriptomoneda }) {
  // State del listado de criptomoneda
  const [listadocripto, guardarCriptomonedas] = useState([])
  const [error, guardarError] = useState(false)
  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'EUR', nombre: 'Euro' }
  ]
  // Utilizar useMoneda
  const [moneda, Seleccionar] = useMoneda('Elige tu Moneda', '', MONEDAS)
  // ultilizar useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listadocripto)
  // Llamado a la api
  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const resultado = await Axios.get(url)
      guardarCriptomonedas(resultado.data.Data)
    }
    consultarApi()
  }, [])

  // cuando el usuario hace submit
  const cotizarMoneda = e => {
    e.preventDefault()
    // validar los campos
    if (moneda === '' || criptomoneda === '') {
      guardarError(true)
      return
    }
    // pasar los datos al componente princilpal
    guardarError(false)
    guardarMoneda(moneda)
    guardarCriptomoneda(criptomoneda)
  }
  return (
    <div>
      <form onSubmit={cotizarMoneda}>
        {error ? <Error mensaje='Todos los campos son Obligatorios' /> : null}
        <Seleccionar />
        <SelectCripto />
        <Boton type='submit' value='Calcular' />
      </form>
    </div>
  )
}

export default Formulario
