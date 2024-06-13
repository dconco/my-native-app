import { ThemeProvider, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {
	Alert,
	Button,
	SafeAreaView,
	StatusBar,
	type StatusBarAnimation,
	StyleSheet,
	Text,
	View,
} from 'react-native'

export default function HomeScreen () {
	const { navigate } = useNavigation()
	StatusBar.setBarStyle('dark-content')

	return (
		<>
			<StatusBar animated={true} backgroundColor={'lightblue'} />

			<SafeAreaView style={styles.container}>
				<View style={styles.topStyle}>
					<Text
						children={'Welcome to Social Media App'}
						style={styles.topText}
					/>
				</View>
				<View style={styles.button}>
					<Button title='Login' />
					<Button title='Register' />
				</View>
			</SafeAreaView>
		</>
	)
}

// STYLES
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'lightblue',
	},
	topStyle: {
		flex: 1,
		paddingHorizontal: 6,
		justifyContent: 'center',
	},
	topText: {
		fontSize: 30,
		textAlign: 'center',
		marginTop: 20,
		fontWeight: 'bold',
		color: 'green',
	},
	button: {
		gap: 10,
		padding: 10,
	},
})
