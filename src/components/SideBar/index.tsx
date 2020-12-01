import React from "react";
import List from "../List";
import FollowSuggestion from "../FollowSuggestion";

import {
   Container,
   SearchWrapper,
   SearchIcon,
   SearchInput,
   Body,
} from "./styles";

const SideBar: React.FC = () => {
   return (
      <Container>
         <SearchWrapper>
            <SearchInput placeholder="Search on Twitter" />
            <SearchIcon />
         </SearchWrapper>

         <Body>
            <List
               title="Maybe you like"
               elements={[
                  <FollowSuggestion name="Jane Doe" nickname="@janedoe" />,
                  <FollowSuggestion name="Johnny Doe" nickname="@johnnydoe" />,
                  <FollowSuggestion name="Janie Doe" nickname="@janiedoe" />,
               ]}
            />
            <List
               title="Maybe you like"
               elements={[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
            />
         </Body>
      </Container>
   );
};

export default SideBar;
