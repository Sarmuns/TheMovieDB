/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Container,
  Header,
  Titulo
} from './style';
import {StatusBar} from 'react-native';

export function Head(){
  return(
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
       />
      <Header>
        <Titulo>
          The Movie DB
        </Titulo>
      </Header>
    </Container>
  );
}