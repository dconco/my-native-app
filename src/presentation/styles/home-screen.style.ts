import styled from 'styled-components/native'

const AppContainer = styled.View`
    height: 100%;
    background-color: lightblue;
`
const ContentView = styled.View`
    width: 100%;
    height: 30px;
    margin: auto;
    justify-content: center;
    background-color: blue;
`
const IntroText = styled.Text`
    color: green;
    font-size: 20px;
`

export { AppContainer, ContentView, IntroText }