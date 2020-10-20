import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { actions } from './GeoSpaceProvider.actions'
import { getData, getOptions } from '../utils'

const {
  LOADED_ACCOMMODATIONS,
  LOADING_ACCOMMODATIONS,
  ERROR_LOADING_ACCOMMODATIONS,
  FILTER_ACCOMMODATIONS,
  SELECT_ACCOMMODATION,
  CLEAR_SELECTION,
} = actions

export const initialState = {
  accommodations: null,
  loadingAccommodations: true,
  errorLoadingAccommodations: false,
  bedOptions: null,
  typeOptions: null,
  bathroomOptions: null,
  filteredAccommodations: null,
  selected_accommodation: null
}

export const GeoSpaceReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADED_ACCOMMODATIONS: {
      return {
        ...state,
        accommodations: payload.transformedData,
        filteredAccommodations: payload.transformedData,
        bedOptions: payload.bedOptions,
        typeOptions: payload.typeOptions,
        bathroomOptions: payload.bathroomOptions,
        loadingAccommodations: false,
        errorLoadingAccommodations: false,
      }
    }
    case LOADING_ACCOMMODATIONS: {
      return {
        ...state,
        loadingAccommodations: true,
      }
    }
    case ERROR_LOADING_ACCOMMODATIONS: {
      return {
        ...state,
        loadingAccommodations: false,
        errorLoadingAccommodations: true,
      }
    }
    case FILTER_ACCOMMODATIONS: {
      return {
        ...state,
        filteredAccommodations: payload,
      }
    }
    case SELECT_ACCOMMODATION: {
      return {
        ...state,
        selected_accommodation: payload,
      }
    }
    case CLEAR_SELECTION: {
      return {
        ...state,
        selected_accommodation: null,
      }
    }
    default:
      return state
  }
}

const GeoSpaceContext = createContext()

const useGeoSpace = () => {
  const context = useContext(GeoSpaceContext)
  if (!context) {
    console.error(' Please call within a GeoSpaceProvider')
    throw new Error('useGeoSpace must be used within a GeoSpaceProvider')
  }
  return context
}

const GeoSpaceProvider = (props) => {
  const [state, dispatch] = useReducer(GeoSpaceReducer, initialState)

  const fetchInitialData = async () => {
    try {
      const loadedAccommodation = await getData()
      const [titles, ...data] = loadedAccommodation.data
      const transformedData = []
      data.forEach((accommodation, i) => {
        const obj = {}
        accommodation.forEach((data, i) => {
          obj[titles[i]] = data
        })
        transformedData.push(obj)
      })

      const bedOptions = getOptions(transformedData, 'beds', 'number')
      const typeOptions = getOptions(transformedData, 'property type')
      const bathroomOptions = getOptions(transformedData, 'baths', 'number')

      dispatch({ type: LOADED_ACCOMMODATIONS, payload: {
        transformedData,
        bedOptions,
        typeOptions,
        bathroomOptions
      } })
    } catch (error) {
      dispatch({ type: ERROR_LOADING_ACCOMMODATIONS })
    }
  }

  useEffect(() => {
    fetchInitialData()
  }, [])

  return (
    <GeoSpaceContext.Provider
      value={{
        state,
        dispatch
      }}
      {...props}
    />
  )
}

export { GeoSpaceProvider, useGeoSpace, GeoSpaceContext }