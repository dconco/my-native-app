import {
   SafeAreaView,
   View,
   FlatList,
   StyleSheet,
   Text,
   StatusBar,
} from 'react-native'
import React from 'react'


const App = () => {
   const dataList = [
      { title: 'First Item' },
      { title: 'Second Item' },
      { title: 'Third Item' },
   ]

   const Item = ({ title }) => (
      <View style={styles.item}>
         <Text style={styles.title}>{title}</Text>
      </View>
   )

   return (
      <SafeAreaView style={styles.container}>
         <FlatList data={dataList} renderItem={({ item }) => <Item title={item.title} />} keyExtractor={item => item.id} />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'lightblue'
   },
   item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#f9c2ff'
   },
   title: {
      fontSize: 32,
   },
})

export default App