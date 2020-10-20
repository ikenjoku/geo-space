export const getOptions =  (data, field, type) => {
  const mappedOptions = data.map(option => option[field])
  let options = mappedOptions.filter(option => option)
  if (type && type === 'number') {
    options = options.map(option => parseInt(option))
  }
  const uniqueOptions = [...new Set(options)]
  return uniqueOptions
}