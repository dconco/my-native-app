import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import type { StatusBarStyle } from 'react-native';
import type { StatusBarAnimation } from 'react-native';
import { StatusThemeStyles, StatusThemeAnim } from './components/types';


const App: React.FC = () => {
   const [statusStyle, setStatusStyle] = useState<StatusBarStyle>(StatusThemeStyles[1])
   const [statusTransition, setStatusTransition] = useState<StatusBarAnimation>(StatusThemeAnim[2])

   return (
      <NavigationContainer>
         <StatusBar animated={true} backgroundColor={'darkblue'} barStyle={statusStyle} showHideTransition={statusTransition} />
      </NavigationContainer>
   )
}

export default App