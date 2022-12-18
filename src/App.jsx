import * as React from 'react';
import Container from '@mui/material/Container';
import {Header} from "./components/Header";
import {PhotoCarousel} from "./components/PhotoCarousel";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

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

const gallery =
    <Container>
        <Header />
        <PhotoCarousel />
    </Container>

const mainPage =
    <Container>
        <Header />
        <div>Main page</div>
    </Container>

const router = createBrowserRouter([
    {
        path: "/",
        element: mainPage
    },
    {
        path: "/gallery",
        element: gallery
    }
])

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
