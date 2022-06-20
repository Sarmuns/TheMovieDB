import React from 'react';
import { Container, MyText } from './style';


export function Botao(data){

  

  return (

    <Container>
      <MyText>{data['data']['name']}</MyText>
    </Container>

  )
}


//{`${data['data']['name']}`}