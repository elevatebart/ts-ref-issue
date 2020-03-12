import React from "react";
import PropTypes from "prop-types";
import * as Rsg from "../../../typings";

export const styles = ({ fontFamily, fontSize, color }: Rsg.Theme) => ({
  type: {
    fontFamily: fontFamily.monospace,
    fontSize: fontSize.small,
    color: color.type
  }
});

interface TypeProps {
  children: React.ReactNode;
}

export const TypeRenderer: React.FunctionComponent<TypeProps> = ({
  children
}) => {
  return <span>{children}</span>;
};

TypeRenderer.propTypes = {
  children: PropTypes.node.isRequired
};

export default TypeRenderer;
