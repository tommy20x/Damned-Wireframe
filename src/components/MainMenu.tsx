import * as React from "react";
import { useSelector } from "react-redux";
import {
  PlasmicMainMenu,
  DefaultMainMenuProps,
} from "./plasmic/the_damned_wireframe_v_1/PlasmicMainMenu";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface MainMenuProps extends DefaultMainMenuProps {}

function MainMenu_(props: MainMenuProps, ref: HTMLElementRefOf<"div">) {
  const active = useSelector((state: any) => state.menu.activeButton);
  
  /*const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  }*/

  const getStyles = (name: string): any => {
    if (active === name) {
      return {
        color: 'blue'
      };
    }
    return {};
  }

  return (
    <PlasmicMainMenu
      root={{ ref }}
      {...props}
      logoButton={getStyles('logo')}
      loreButton={getStyles('lore')}
      roadmapButton={getStyles('roadmap')}
      contestsButton={getStyles('contests')}
      eventsButton={getStyles('events')}
      voidButton={getStyles('void')}
      throneButton={getStyles('throne')}
      faqButton={getStyles('faq')}
      teamButton={getStyles('team')}
      contactButton={getStyles('contact')}
    />
  );
}

const MainMenu = React.forwardRef(MainMenu_);
export default MainMenu;
