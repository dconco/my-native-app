import React from 'react'
import { AppContainer, ContentView, IntroText } from '../styles/home-screen.style'


const HomeScreen: React.FC = () => {
    return (
        <AppContainer>
            <ContentView>
                <IntroText>Welcome to Dave App</IntroText>
            </ContentView>
        </AppContainer>
    )
}

export default HomeScreen