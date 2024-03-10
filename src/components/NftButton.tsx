import * as React from "react";
import {
  PlasmicNftButton,
  DefaultNftButtonProps
} from "./plasmic/the_damned_wireframe_v_1/PlasmicNftButton";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface NftButtonProps extends DefaultNftButtonProps {}

function NftButton_(props: NftButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicNftButton.useBehavior<NftButtonProps>(
    props,
    ref
  );
  return <PlasmicNftButton {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<NftButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<NftButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const NftButton = React.forwardRef(NftButton_) as any as ButtonComponentType;

export default Object.assign(NftButton, {
  __plumeType: "button"
});
