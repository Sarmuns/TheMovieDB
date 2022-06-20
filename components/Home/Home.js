/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Head} from '../head/head';
import {Card} from '../card/card';
import {Load} from '../loading/load';
import api from '../../services/api';

export default function Home() {
  const [user, setUser] = useState([]);
  // const [genres, setGenres] = useState([]);
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
