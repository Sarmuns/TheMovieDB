import React from 'react';
import { Head } from '../head/head';
import {
  FlatList,
  Button
} from 'react-native'
import { Botao } from '../botao/botao';
import getGenre from '../../services/getGenre';
import { Load } from '../loading/load';

export function GenrePage(){

  const [data, setData] = React.useState(" ");
  const [loading, setLoading] = React.useState(true);
 
  React.useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await getGenre.get('');
        setData(response.data);
        console.log(data);
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
      <Head/>
      {loading ? (
        <Load />
      ) : (
        <FlatList
        data={data.genres}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        renderItem={({item}) => <Botao data={item} />}
        />
      )}
    </>
  )
}