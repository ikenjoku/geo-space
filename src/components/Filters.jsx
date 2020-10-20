import React, { useEffect, useState } from 'react'
import { FilterContainer, SelectField } from './styles'
import { useGeoSpace } from '../context/GeoSpaceProvider'
import { actions } from '../context/GeoSpaceProvider.actions'
import { capitalize, propertyType } from '../utils'

export default function Filters() {
  const { state: {
    bedOptions,
    typeOptions,
    bathroomOptions,
    accommodations,
    loadingAccommodations,

  },
  dispatch
} = useGeoSpace()
  const [selectedType, setSelectedType] = useState('')
  const [selectedBeds, setSelectedBeds] = useState('')
  const [selectedBath, setSelectedBath] = useState('')

  useEffect(() => {
    const handleAccommodationFilter = () => {
      const result = accommodations.filter(house => {
        return house.beds.includes(selectedBeds) &&
        house.baths.includes(selectedBath) &&
        house[propertyType].includes(selectedType)
      })
      dispatch({ type: actions.FILTER_ACCOMMODATIONS, payload: result })
    }
    if (accommodations) {
      handleAccommodationFilter()
    }
  }, [selectedType, selectedBeds, selectedBath, accommodations, dispatch])

  return (
    <FilterContainer>
      { loadingAccommodations ? 'Fetching Data' : (
        <>
          <SelectField
            name="bed-filter"
            disabled={!bedOptions}
            onChange={e => setSelectedBeds(e.target.value)}
          >
            <option value="">Number of beds</option>
            { bedOptions.map((num) =>
            <option key={num} value={num}>{num}</option>) }
          </SelectField>

          <SelectField
            name="bath-filter"
            disabled={!bathroomOptions}
            onChange={e => setSelectedBath(e.target.value)}
          >
            <option value="">Number of baths</option>
            { bathroomOptions.map((num) =>
            <option key={num} value={num}>{num}</option>) }
          </SelectField>

          <SelectField
            name="type-filter"
            disabled={!typeOptions}
            onChange={e => setSelectedType(e.target.value)}
          >
            <option value="">Property type</option>
            { typeOptions.map((type) =>
            <option key={type} value={type}>{capitalize(type)}</option>) }
          </SelectField>
        </>
      )}

    </FilterContainer>
  )
}
