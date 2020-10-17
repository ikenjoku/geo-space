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
  /* height: 200px; */
  text-align: left;
  margin: 0 auto;
  width: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
    width: 0;
    height: 0;
    }

  @media (min-width: 600px) {
    height: calc(100vh - 200px);
    width: 25%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
    width: 0;
    height: 0;
    }
  }
`

export const DetailSection = styled.section`

  @media (min-width: 600px) {
    display:flex;
    flex-direction: row;
    justify-content: space-between
  }
`

export const Titles = styled.p`
  color: #5389dc;
  padding: 0.5em 0;
  font-weight: 600;
`

export const HeaderTitle = styled.h2`
  color: #5389dc;
  /* padding: 0.5em; */

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

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    margin-right: 0.5em;
  }

  @media (min-width: 600px) {
    display:flex;
    flex-direction: column;
  }
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`


