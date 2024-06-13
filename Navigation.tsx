import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'

// const Tab = createMaterialBottomTabNavigator()

// const TabGroup = () => (
// 	<Tab.Navigator>
// 		<Tab.Screen name='home' component={HomeScreen} />
// 		<Tab.Screen name='settings' component={HomeScreen} />
// 	</Tab.Navigator>
// )

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<HomeScreen />
		</NavigationContainer>
	)
}

export default Navigation
