import MusicList from "./MusicList";

import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { ChangeEvent, useState } from "react";
import { Result } from "../types/interfaces";

function Search() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Result[] | null>(null);
  const [placeholder, setPlaceholder] = useState<string>(
    "Search for your favorite beats"
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const handleClick = () => {
    getMusic(query);
    setPlaceholder("Give it another go...");
    console.log(placeholder);
  };

  const getMusic = async (query: string) => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      let res = await response.json();
      let resp = res.data;
      console.log(resp);

      setResults(resp);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="container_searchbar">
        <InputGroup className="mb-3 searchbar">
          <FormControl placeholder={placeholder} onChange={handleChange} />
          <Button onClick={handleClick} variant="secondary" id="search-btn">
            Search
          </Button>
        </InputGroup>
        {results && results.length > 0 ? (
          <MusicList songs={results} isLoading={isLoading} />
        ) : !results ? (
          <Image src="gorilla.png" id="gorilla" />
        ) : (
          <h2>No results</h2>
        )}
      </Container>
    </>
  );
}

export default Search;
