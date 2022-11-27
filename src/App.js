import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Container from '@mui/material/Container';
import {Header} from "./components/Header";
import {PhotoCarousel} from "./components/PhotoCarousel";

const items = [
    {src: "./assets/1.jpg"},
    {src: "./assets/2.jpg"},
    {src: "./assets/3.jpg"},
    {src: "./assets/4.jpg"},
    {src: "./assets/5.jpg"},
    {src: "./assets/6.jpg"},
    {src: "./assets/7.jpg"},
    {src: "./assets/8.jpg"},
    {src: "./assets/9.jpg"}
]

export default function App() {
  return (
    <Container>
        <Header />
        <PhotoCarousel />
    </Container>
  );
}
