import { useRef } from "react";
import {
  ButtonContainer,
  Container,
  SearchIput,
  SearchSelection,
} from "./Home.styled";
import { Button } from "../Component/Button.styled";

export function Home() {
  const searchValue = useRef(null);

  const HandleSubmit = (data) => {
    data.preventDefault();
    console.log(searchValue.current.value);
  };

  const SearchTerm = (term) => {
    searchValue.current.value = term;
  };

  return (
    <>
      <Container>
        <h1>Search Image</h1>
        <SearchSelection onSubmit={HandleSubmit}>
          <SearchIput
            type="search"
            placeholder="search image.."
            ref={searchValue}
          />
          <ButtonContainer>
            <Button onClick={() => SearchTerm("laptop")}>Laptop</Button>
            <Button onClick={() => SearchTerm("Bike")}>Bike</Button>
            <Button onClick={() => SearchTerm("Anime")}>Anime</Button>
            <Button onClick={() => SearchTerm("Apple")}>Apple</Button>
          </ButtonContainer>
        </SearchSelection>
      </Container>
    </>
  );
}
