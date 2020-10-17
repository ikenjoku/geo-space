import styled from 'styled-components'

export const FilterContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
`

export const Chart = styled.div`
  background-color: grey;
  border-radius: 50%;
  height: 125px;
  width: 125px;
`

export const ChartContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SelectField = styled.select`
    width: 200px;
    height: 30px;
    margin-bottom: 1em;
    display: block;
  `

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1em;
    background-color: #4a4e52;
    height: 200px;
    align-items: center;

    @media (max-width: 400px) {
      flex-direction: column;
      height: auto;
    }
  `

export const MapView = styled.div`
    background-color: grey;
    height: 500px;

    @media (min-width: 600px) {
      height: calc(100vh - 200px);
      width: 70%;
    }
  `

export const Drawer = styled.div`
    background-color: white;
    height: 200px;

    @media (min-width: 600px) {
      height: calc(100vh - 200px);
      width: 25%;
    }
  `

export const DetailSection = styled.section`

    @media (min-width: 600px) {
      display:flex;
      flex-direction: row;
      justify-content: space-between
    }
  `

