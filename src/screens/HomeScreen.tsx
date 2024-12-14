import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNotes } from '../contexts/NotesContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const { notes, addNote, deleteNote } = useNotes();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Notes</Text>

      {/* Add Note Button */}
      <TouchableOpacity style={styles.addButton} onPress={addNote}>
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      {/* Notes List */}
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.noteItem}
            onPress={() => navigation.navigate('Note', { id: item.id })}
          >
            <Text numberOfLines={1} style={styles.noteContent}>
              {item.content || 'New Note'}
            </Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  addButton: { padding: 10, backgroundColor: '#4CAF50', borderRadius: 5 },
  addButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  noteItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginVertical: 8,
  },
  noteContent: { fontSize: 18 },
  timestamp: { fontSize: 12, color: 'gray' },
  deleteButton: { color: 'red', marginTop: 4 },
});

export default HomeScreen;