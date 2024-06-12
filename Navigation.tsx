import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import HomeScreen from "./src/screens/HomeScreen"

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<HomeScreen />
		</NavigationContainer>
	)
}

export default Navigation