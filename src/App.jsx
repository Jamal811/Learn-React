import React from "react";
import MediaCard from "./components/MediaCard";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material";
import Jsx from "./components/Jsx";
import ClickButton from "./components/ClickButton";
import Parent from "./components/Parent";
import Profile from "./components/props/Profile";
import ParentProduct from "./components/props/ParentProduct";
import State from "./components/State";
import EventListner from "./components/Events/EventListner";
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
import ConRendering2 from "./components/ConditionalRendering/ConRendering2";
import JokeList from "./components/RanderingLists/JokeList";
import { Route, Routes } from "react-router-dom";
import Home from "./components/React-router/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/React-router/About";
import Blog from "./components/React-router/Blog";
import NotFound from "./components/React-router/NotFound";
import BookList from "./components/React-router/BookList";
import Book from "./components/React-router/Book";
import NewBook from "./components/React-router/NewBook";
import BookLayout from "./components/React-router/BookLayout";

function App() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route exact path="/books" element={<BookList />} />
        <Route exact path="/books/:id" element={<Book />} />
        <Route exact path="/books/new" element={<NewBook />} /> */}
        <Route exact path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        <Route exact path="*" element={<NotFound />} />
      </Routes>
      {/* <JokeList /> */}
      {/* <ConRendering2 /> */}
      {/* <ConditionalRendering /> */}
      {/* <EventListner /> */}
      {/* <ParentProduct />
      <State /> */}
      {/* <Profile /> */}
      {/* <ClickButton />
      <Parent /> */}
      {/* <Jsx /> */}
      {/* <Grid container spacing={3}>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
