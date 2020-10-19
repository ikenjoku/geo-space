import { capitalize } from './capitalize'
import { propertyType } from './enums'

export function getChartData (data) {
  const result = []
  const types = data.map(house => house[propertyType])
  const totalItems = types.length
  const uniqueItems = [...new Set(types)]
  uniqueItems.forEach(currType => {
    const numItems = types.filter(type => type === currType)
    result.push({
      name: capitalize(currType),
      value: +parseFloat(numItems.length * 100 / totalItems).toFixed(2)
    })
  })
  return result
}