import React from "react";
import StickyBox from "react-sticky-box";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

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

         <StickyBox>
            <Body>
               <List
                  title="Who to follow"
                  elements={[
                     <FollowSuggestion name="Jane Doe" nickname="@janedoe" />,
                     <FollowSuggestion
                        name="Johnny Doe"
                        nickname="@johnnydoe"
                     />,
                     <FollowSuggestion name="Janie Doe" nickname="@janiedoe" />,
                  ]}
               />
               <List
                  title="Trends for you"
                  elements={[<News />, <News />, <News />]}
               />
               <List
                  title="Trends for you"
                  elements={[<News />, <News />, <News />]}
               />
               <List
                  title="Trends for you"
                  elements={[<News />, <News />, <News />]}
               />
            </Body>
         </StickyBox>
      </Container>
   );
};

export default SideBar;
