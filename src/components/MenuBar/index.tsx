import React from "react";
import Button from "../Button";
import {
   Container,
   Topside,
   Logo,
   MenuButton,
   HomeIcon,
   BellIcon,
   EmailIcon,
   FavoriteIcon,
   ProfileIcon,
} from "./styles";

const MenuBar: React.FC = () => {
   return (
      <Container>
         <Topside>
            <Logo />

            <MenuButton>
               <HomeIcon />
               <span>Home Page</span>
            </MenuButton>

            <MenuButton>
               <BellIcon />
               <span>Notifications</span>
            </MenuButton>

            <MenuButton>
               <EmailIcon />
               <span>Messages</span>
            </MenuButton>

            <MenuButton>
               <FavoriteIcon />
               <span>Favorites</span>
            </MenuButton>

            <MenuButton className="active">
               <ProfileIcon />
               <span>Profile</span>
            </MenuButton>

            <Button>
               <span>Tweet</span>
            </Button>
         </Topside>
      </Container>
   );
};

export default MenuBar;
