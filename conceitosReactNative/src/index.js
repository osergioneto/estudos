import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(({data}) => {
      setRepositories(data);
    });
  });

  async function handleAddProject() {
    const response = await api.post('/repositories', {
      title: `Novo projeto ${new Date().getMilliseconds()}`,
      owner: 'Sérgio Neto',
    });

    setRepositories([...repositories, response.data]);
  }

  return (
    <>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          keyExtractor={repository => repository.id}
          renderItem={({item: repository}) => (
            <Text style={styles.title}>{repository.title}</Text>
          )}
        />

        <TouchableOpacity onPress={handleAddProject} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar repositório</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  title: {
    color: '#FFF',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
