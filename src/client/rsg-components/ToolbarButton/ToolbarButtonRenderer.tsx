import React from "react";
import PropTypes from "prop-types";
import * as Rsg from "../../../typings";

export const styles = ({ space, color }: Rsg.Theme) => ({
  button: {
    padding: 2, // Increase clickable area a bit
    color: color.light,
    background: "transparent",
    transition: "color 750ms ease-out",
    cursor: "pointer",
    "&:hover, &:focus": {
      isolate: false,
      color: color.linkHover,
      transition: "color 150ms ease-in"
    },
    "&:focus": {
      isolate: false,
      outline: [[1, "dotted", color.linkHover]]
    },
    "& + &": {
      isolate: false,
      marginLeft: space[1]
    },
    // Style react-icons icon passed as children
    "& svg": {
      width: space[3],
      height: space[3],
      color: "currentColor",
      cursor: "inherit"
    }
  },
  isSmall: {
    "& svg": {
      width: 14,
      height: 14
    }
  }
});

interface ToolbarButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  title?: string;
  small?: boolean;
  testId?: string;
}

export const ToolbarButtonRenderer: React.FunctionComponent<ToolbarButtonProps> = ({
  className,
  onClick,
  href,
  title,
  small,
  testId,
  children
}) => {
  const classNames = className;

  if (href !== undefined) {
    return (
      <a
        href={href}
        title={title}
        className={classNames}
        aria-label={title}
        data-testid={testId}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={classNames}
      aria-label={title}
    >
      {children}
    </button>
  );
};

ToolbarButtonRenderer.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  small: PropTypes.bool,
  testId: PropTypes.string,
  children: PropTypes.node
};

export default ToolbarButtonRenderer;
