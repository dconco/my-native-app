import React, { useState } from 'react'
import {
   SafeAreaView,
   FlatList,
   StyleSheet,
   StatusBar,
   Alert
} from 'react-native'
import {
   ItemText,
   ItemView,
   StyledButton
} from './styles/App.style';


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
      <ItemView>
         <ItemText key={title}>{title}</ItemText>
      </ItemView>
   )


   /**
    * Renders an item with a title.
    *
    * @component
    * @param {Object} props - The component props.
    * @param {string} props.title - The title of the item.
    * @returns {JSX.Element} The rendered Item component.
   */
   return (
      <SafeAreaView style={styles.container}>
         <FlatList data={dataList} renderItem={({ item }) => <Item title={item.title} />} keyExtractor={Math.random} />
         <StatusBar backgroundColor='lightblue' barStyle='dark-content' />

         <StyledButton title='Button Element' onPress={buttonClickFunc} />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'lightblue'
   },
})

export default App