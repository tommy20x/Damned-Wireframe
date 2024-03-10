import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  PlasmicStory,
  DefaultStoryProps,
} from "./plasmic/the_damned_wireframe_v_1/PlasmicStory";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import "./Story.css";
import { useSelector } from "react-redux";

export interface StoryProps extends DefaultStoryProps {}

function FadeInSection(props: any) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (domRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Damned = () => (
  <FadeInSection>
    <p>
      “The echoing footsteps lasted for eternity, Ten thousand souls wandered
      alone together, Drifting through the halls of limbo, Speaking voiceless
      passages of reason, Nothing concluded, nothing good nor bad Passed not in
      thought nor in feeling, Just the numb existence of rocks in motion.”{" "}
    </p>
    <p>~ Laurence Fuller 2022</p>
  </FadeInSection>
);

const Lore = () => (
  <FadeInSection>
    <p>
      Before man’s first disobedience, that (wicked) fruit, there was a war for
      heaven. Angels rebelled against God’s word and clashed their swords, the
      strongest among them Lucifer, glorious in stature with an unquenchable
      thirst for power.
    </p>
    <p>
      In pandemonium Satan rallied legions of his fallen angels now disfigured
      from the wars, as well as the many outcasts that dwelled in hell, Centaurs
      and demons who feast on misfortune. Erected in the outer edges of this
      dark carnival The Castle of Limbo houses the lost and wandering souls of
      The Damned.
    </p>
  </FadeInSection>
);

const Limbo = () => (
  <FadeInSection>
    <p>
      Lost souls wander through the castle of LIMBO, through the cold cobble
      stones that built up this fortress of woe and desolation, infinite abyss.
      We must find our escape through corridors of endless woe. But I never lost
      hope that one day I could be freed from this eternal damnation of apathy
      and that we would find an escape to enlightenment. Riddles lead us to a
      secret door, which opens out onto a beautiful blossoming garden.
    </p>
  </FadeInSection>
);

const Lust = () => (
  <FadeInSection>
    <p>
      When finally free from the constraints of nothingness we find nakedness
      again, the pleasures of the flesh pull us into an unabated orgy in the
      gardens of LUST. Though our desire is swiftly met with jealousy from the
      serpents of Hell, who drive us from the garden into nearby lakes filled
      with hot lava. Those who not sink into the eternal fire are whisked up in
      winds of rocks and fire which rip their flesh. As the serpents feast on
      human flesh they begin to regain their hellish forms. Those who survive
      and resist temptation are able to find the hidden poems in the garden that
      unlock the banquets of Gluttony.
    </p>
  </FadeInSection>
);

const Gluttony = () => (
  <FadeInSection>
    <p>
      Behind a locked door in the castle lies a banquet of GLUTTONY, the most
      delicious foods from all corners of Paradise. Beelzebub sits with Satan’s
      highest conspirators sit at the heads of the table, bloated demons in
      midst their first feast in over a century. The bellies of these beasts are
      so over fed they can barely move, locked into the despair of their gorging
      with the desire for more. The chamber stinks of sour wine and roasted
      meat. Within fine food, beneath the cutlery lies a secret from the scribe.
    </p>
  </FadeInSection>
);

const Greed = () => (
  <FadeInSection>
    <p>
      In Satan’s vaults of GREED, he has been holding the forbidden treasures of
      the underworld. Every fallen soul carries with them their mortal objects
      which are bound to them like boulders on their backs and the money lenders
      stare desirously, but only at other people’s sacks. Some souls are
      fastened forever by molten gold to the surrounding rocks.
    </p>
  </FadeInSection>
);

const Anger = () => (
  <FadeInSection>
    <p>
      Every few years a new crop of Damned souls drops from the Hellish skies
      into the Minotaur’s pit of ANGER, who with his father King Minos, they
      sort and judge the souls with scrutiny for their failings ~ which should
      be lucky enough to receive apathy and which shall be cursed to eternities
      of woe. Their torturous methods are played out in hideous games. Surviving
      the games unlocks some gruesome poetry indeed.
    </p>
  </FadeInSection>
);

const Heresy = () => (
  <FadeInSection>
    <p>
      In the ruins of the HERETICS ~ a landscape of relics (designed by some of
      the top 3D sculptors in the space [i.e. tie in with DIGX & Mwan &
      potentially Bill Elis?]) ~ False idols lay in wait for the damned to
      worship. Piecing such ruins back together unlocks secrets of Heresy
    </p>
  </FadeInSection>
);

const Violence = () => (
  <FadeInSection>
    <p>
      Among those darkest of soul await a torture chamber of VIOLENCE, in which
      the Damned are put to task for their sins. Goya~esque nightmares surround
      a dungeon of monstrous mignons and misfortune, such as a head cage filled
      with hungry rats. Escape this torture and receive a poem for your
      troubles.
    </p>
  </FadeInSection>
);

function Story_(props: StoryProps, ref: HTMLElementRefOf<"div">) {
  const active = useSelector((state: any) => state.menu.activeButton);

  const title = useMemo(() => {
    switch (active) {
      case "logo":
        return 'Damned';
      case "lore":
        return 'Lore';
      case "roadmap":
        return 'Limbo';
      case "contests":
        return 'Lust';
      case "events":
        return 'Gluttony';
      case "void":
        return 'Greed';
      case "throne":
        return 'Anger';
      case "faq":
        return 'Heresy';
      case "team":
        return 'Violence';
      case "contact":
        return 'Anger';
      default:
        return '';
    }
  }, [active])

  const getStoryText = useCallback(() => {
    const getStory = () => {
      switch (active) {
        case "logo":
          return <Damned />;
        case "lore":
          return <Lore />;
        case "roadmap":
          return <Limbo />;
        case "contests":
          return <Lust />;
        case "events":
          return <Gluttony />;
        case "void":
          return <Greed />;
        case "throne":
          return <Anger />;
        case "faq":
          return <Heresy />;
        case "team":
          return <Violence />;
        case "contact":
          return <Anger />;
        default:
          return <></>;
      }
    };
    return <div className="fade-in-text">{getStory()}</div>;
  }, [active]);

  return (
    <PlasmicStory
      root={{ ref }}
      {...props}
      title={title}
      storyText={getStoryText()}
    />
  );
}

const Story = React.forwardRef(Story_);
export default Story;
