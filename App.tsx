import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import type { StatusBarStyle, StatusBarAnimation } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { StatusThemeStyles, StatusThemeAnim } from './src/presentation/components/types/types.component';
import HomeScreen from './src/presentation/screens/home-screen';


const App: React.FC = () => {
   const [statusStyle, setStatusStyle] = useState<StatusBarStyle>(StatusThemeStyles[1])
   const [statusTransition, setStatusTransition] = useState<StatusBarAnimation>(StatusThemeAnim[2])

   return (
      <NavigationContainer>
         <StatusBar animated={true} backgroundColor={'darkblue'} barStyle={statusStyle} showHideTransition={statusTransition} />
         <HomeScreen />
      </NavigationContainer>
   )
}

export default App