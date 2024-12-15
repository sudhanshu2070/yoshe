import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { useNotes } from '../contexts/NotesContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const { notes, addNote } = useNotes();
  
  // Get screen width to dynamically calculate square size
  const screenWidth = Dimensions.get('window').width;
  const boxSize = screenWidth / 2 - 20; // 2 items per row with margin

  return (
    <View style={styles.container}>
      {/* Notes List */}
      <FlatList
        data={notes}
        numColumns={2} // 2 notes per row
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.noteItem, { width: boxSize, height: boxSize }]}
            onPress={() => navigation.navigate('Note', { id: item.id })}
          >
            <Text numberOfLines={4} style={styles.noteContent}>
              {item.content || 'New Note'}
            </Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Add Note Button */}
      <TouchableOpacity style={styles.addButton} onPress={addNote}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  noteItem: {
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteContent: { fontSize: 16, color: '#333' },
  timestamp: { fontSize: 12, color: 'gray', marginTop: 4 },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: { fontSize: 24, color: '#fff' },
});

export default HomeScreen;