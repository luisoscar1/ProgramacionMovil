import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { useState, useEffect } from 'react';

const imagen = require('./assets/goku.webp');

export default function App() {
  const [busqueda, setBusqueda] = useState('');
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        setPokemones(data.results);
      })
  });

  return (
    <View style={styles.container}>
      <Text>Pokedex!</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <View style={styles.pokemonList}>
        {pokemones.map((pokemon) => (
          <View key={pokemon.name} style={styles.section}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.paragraph}>{pokemon.name}</Text>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
