import React from "react";

import {
   Container,
   Retweeted,
   Logo,
   Body,
   Avatar,
   Content,
   Header,
   Dot,
   Description,
   ImageContent,
   Icons,
   Status,
   CommentIcon,
   RetweetIcon,
   LikeIcon,
} from "./styles";

const Tweet: React.FC = () => {
   return (
      <Container>
         <Retweeted>
            <Logo />
            you retweeted
         </Retweeted>

         <Body>
            <Avatar />
            <Content>
               <Header>
                  <strong>Bob</strong>
                  <span>@bob</span>
                  <Dot />
                  <time>13 Jan</time>
               </Header>

               <Description>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit
               </Description>

               <ImageContent />

               <Icons>
                  <Status>
                     <CommentIcon />
                     23
                  </Status>
                  <Status>
                     <RetweetIcon />
                     50
                  </Status>
                  <Status>
                     <LikeIcon />
                     100
                  </Status>
               </Icons>
            </Content>
         </Body>
      </Container>
   );
};

export default Tweet;
