import React, { useState } from 'react'
import { FilterContainer, SelectField } from './styles'
export default function Filters() {
  const [selectedType, setSelectedType] = useState('')
  const [selectedBeds, setSelectedBeds] = useState('')
  const [selectedBath, setSelectedBath] = useState('')


  return (
    <FilterContainer>
      <SelectField name="" id="">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </SelectField>

      <SelectField name="" id="">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </SelectField>

      <SelectField name="" id="">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </SelectField>
  
    </FilterContainer>
  )
}
