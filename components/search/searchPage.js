import React from 'react';
import { Head } from '../head/head';
import {
  Button,
  FlatList,
} from 'react-native'
import getMovie from '../../services/getMovie';
import { 
  Input,
} from './style';
import { Load } from '../loading/load';
import { Card } from '../card/card';

export function SearchPage(){
  const [text, onChangeText] = React.useState(" ");
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState([])
  
  async function fetchMovie() {
    try {
      setLoading(true)
      const response = await getMovie.get('' + text);
      setUser(response.data);
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <Head />
        <Input
        onChangeText={onChangeText}
        value={text}
        />
        <Button
        title = 'Search'
        onPress={fetchMovie}
        color = '#b38cf5'
        >
        </Button>
        {loading ? (
          <Load />
        ) : (   
          <FlatList
          data={user.results}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Card data={item} />}
        />)}
    </>
  )}