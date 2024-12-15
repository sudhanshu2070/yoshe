import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useNotes } from '../contexts/NotesContext';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type NoteScreenRouteProp = RouteProp<RootStackParamList, 'Note'>;

type Props = {
  route: NoteScreenRouteProp;
};

const NoteScreen = ({ route }: Props) => {
  const { id } = route.params;
  const { notes, updateNote } = useNotes();
  const note = notes.find((n) => n.id === id);
  const [content, setContent] = useState(note?.content || '');

  useEffect(() => {
    updateNote(id, content);
  }, [content]);

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Write your note here..."
        multiline
        value={content}
        onChangeText={setContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  input: { fontSize: 18, textAlignVertical: 'top', flex: 1 },
});

export default NoteScreen;