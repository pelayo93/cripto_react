import React, { useState } from 'react'
import styled from '@emotion/styled'
const useMoneda = (label, stateInicial, opcionesMonedas) => {
  const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-wight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
  `
  const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
  `
  // State de nuestro custom hook
  const [state, actualizarState] = useState('')
  const Seleccionar = () => (
    <>
      <Label>{label}</Label>
      <Select
        onChange={e => actualizarState(e.target.value)}
        value={state}
      >
        <option value=''>-- Seleccione  --</option>
        {opcionesMonedas.map(opcion => (
          <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
        ))}
      </Select>
    </>
  )
  // Reronar state, interfax y fin que modifica el state
  return [state, Seleccionar, actualizarState]
}

export default useMoneda
