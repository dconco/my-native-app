import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const LoginScreen: React.FC = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topStyle}>
				<Text children={'Login to Social Media App'} style={styles.topText} />
			</View>
			<View style={styles.button}>
				<Button title='Go Back' />
			</View>
		</SafeAreaView>
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

export default LoginScreen
