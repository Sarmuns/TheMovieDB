/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
margin-top: 8px;
background-color: lightgrey;
border-radius: 17px;
flex-direction: row;
padding: 17px;
margin-bottom: 16px;
`;
export const Wrapper = styled.View`
padding-right: 10px;
`;
export const Title = styled.Text`
font-size: 16px;
width: 140px;
text-align: center;
font-weight: bold;
color: black;
`;
export const MovieImage = styled.Image`
width: 140px;
height: 210px;
`;
export const Details = styled.Text`
flex: 1;
flex-wrap: wrap;
padding-top: 20px;
text-align: justify;
`;
export const About = styled.View`
flex-shrink: 1;
`;
export const Year = styled.Text`
font-weight: bold;
`;
export const Genre = styled.Text`
font-weight: bold;
`;