import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Head} from './components/head/head';
import {Card} from './components/card/card';
import {Load} from './components/loading/load';
import api from './services/api';

export default function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await api.get('');
        setUser(response.data);
        console.log(user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, []);

  return (
    <>
      <Head />
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={user.results}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Card data={item} />}
        />
      )}
    </>
  );
}
