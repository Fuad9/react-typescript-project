import React from "react";
import Feed from "../Feed";

import {
   Container,
   Banner,
   Avatar,
   ProfileData,
   LocationIcon,
   CakeIcon,
   Followage,
   EditButton,
} from "./styles";

const ProfilePage: React.FC = (): JSX.Element => {
   return (
      <Container>
         <Banner>
            <Avatar />
         </Banner>

         <ProfileData>
            <EditButton>Edit Profile</EditButton>

            <h1>Jane Doe</h1>
            <h2>@janedoe</h2>
            <p>
               Developer at <a href="http://google.com">Google</a>
            </p>
            <ul>
               <li>
                  <LocationIcon />
                  New York, USA
               </li>
               <li>
                  <CakeIcon />
                  born on August 10, 1995
               </li>
            </ul>

            <Followage>
               <span>
                  following <strong>150</strong>
               </span>
               <span>
                  <strong>500</strong> followers
               </span>
            </Followage>
         </ProfileData>
         <Feed />
      </Container>
   );
};

export default ProfilePage;
