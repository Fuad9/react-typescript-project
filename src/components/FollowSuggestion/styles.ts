import styled from "styled-components";
import person3 from "../../images/person3.jpg";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   > div {
      display: flex;
      align-items: center;
   }
`;

export const Avatar = styled.div`
   width: 49px;
   height: 49px;
   background-color: var(--gray);
   background-image: url(${person3});
   background-size: cover;
   border-radius: 50%;
   margin-right: 10px;
`;

export const Info = styled.div``;

export const FollowButton = styled.div``;
