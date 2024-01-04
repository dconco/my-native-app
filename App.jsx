import {
   SafeAreaView,
   View,
   FlatList,
   StyleSheet,
   Text,
   StatusBar,
   Alert,
   Button,
} from 'react-native'
import React, { useState } from 'react'
import { ItemText, ItemView } from './styles/App.style';


const App = () => {
   const [clickCount, updateClickCount] = useState(1);

   const buttonClickFunc = () => {
      updateClickCount(ss => ss += 1);
      Alert.alert('Button Clicked', `You've clicked the Button Element ${clickCount} times!`);
   }

   const dataList = [
      { title: 'First Item' },
      { title: 'Second Item' },
      { title: 'Third Item' },
   ]

   const Item = ({ title }) => (
      <ItemView style={styles.item}>
         <ItemText style={styles.title}>{title}</ItemText>
      </ItemView>
   )


   // return JSX
   return (
      <SafeAreaView style={styles.container}>
         <FlatList data={dataList} renderItem={({ item }) => <Item title={item.title} />} keyExtractor={Math.random} />
         <StatusBar backgroundColor='lightblue' barStyle='dark-content' />

         <Button title='Button Element' color={'red'} onPress={buttonClickFunc} />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'lightblue'
   },
   item: {

   },
   title: {
      fontSize: 32,
   },
})

export default App