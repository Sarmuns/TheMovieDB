/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Container,
  Title,
  MovieImage,
  Details,
  About,
  Year,
  Genre,
  Wrapper
} from './style';
//fazer header, depois um card generico estático
export function Card({data,...rest}) {

  const genres = [{'id':28,'name':'Action'},{'id':12,'name':'Adventure'},{'id':16,'name':'Animation'},{'id':35,'name':'Comedy'},{'id':80,'name':'Crime'},{'id':99,'name':'Documentary'},{'id':18,'name':'Drama'},{'id':10751,'name':'Family'},{'id':14,'name':'Fantasy'},{'id':36,'name':'History'},{'id':27,'name':'Horror'},{'id':10402,'name':'Music'},{'id':9648,'name':'Mystery'},{'id':10749,'name':'Romance'},{'id':878,'name':'Science Fiction'},{'id':10770,'name':'TV Movie'},{'id':53,'name':'Thriller'},{'id':10752,'name':'War'},{'id':37,'name':'Western'}];
  //myArray.findIndex(x => x.id === '45')


  return (
    <Container>
      <Wrapper>
        <Title>{data.title}</Title>
        <MovieImage source={{uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}} />
      </Wrapper>
      <About>
        <Details>{data.overview}</Details>
        <Year>{data.release_date.substring(0, 4)}</Year>
        <Genre>{genres.find(x => x.id === data.genre_ids[0]).name}</Genre>
      </About>
    </Container>
  );
}
