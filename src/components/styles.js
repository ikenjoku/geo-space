import styled, { css } from 'styled-components'

export const FilterContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

export const StreetViewContainer = styled.div`
  height: 250px;
  width: 100%;
  max-width: 300px;
`

export const DrawerFrame = styled.div`
  position: relative;
`

export const Chart = styled.div`
  background-color: grey;
  border-radius: 50%;
  height: 125px;
  width: 125px;
`

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SelectField = styled.select`
  padding: .65em;
  outline: auto;
  border-radius: 5px;
  width: 250px;
  font-style: italic;
  font-weight: 600;
  font-family: monospace;
  font-size: 14px;
  margin: 1em;
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1em;
  background-color: #4a4e52;
  height: 200px;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
  }
`

export const MapView = styled.div`
  background-color: grey;
  height: 500px;

  @media (min-width: 650px) {
    height: calc(100vh - 200px);
    width: 70vw;
  }
`

export const DetailSection = styled.section`

  @media (min-width: 650px) {
    display:flex;
    flex-direction: row;
  }
`

export const Drawer = styled.div`
  background-color: #4a4e52;
  color: white;
  overflow-x: scroll;
  scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
    width: 0;
    height: 0;
    }

  @media (min-width: 650px) {
    position: absolute;
    top: 0;
    left: -500px;
    z-index: 100;
    width: 35vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    max-width: 300px;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
    width: 0;
    height: 0;
    }

    ${ ({ selectedProperty }) => !!selectedProperty && css`
    transition: 750ms;
    left: 0
  `};
  }
`
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;

  & > div {
    margin-right: 0.5em;
  }

  @media (min-width: 650px) {
    display:flex;
    flex-direction: column;
  }
`

export const PropertyContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 500px;

  @media (min-width: 650px) {
    display: flex;
    flex-direction: column;
    min-width: unset;
  }
`

export const Titles = styled.p`
  color: #5389dc;
  padding: 0.5em 0;
  font-weight: 600;
`

export const HeaderTitle = styled.h2`
  color: #5389dc;
`

export const Attributes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  & div {
    margin-right: 1em;
    text-align: center;
  }
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`

export const CloseButton = styled.button`
  margin-top: 2em;
  padding: 6px 18px;
  color: #ffb1b1;
  background-color: #4a4e52;
  outline-style: none;
`


