import React from "react";
import PropTypes from "prop-types";
import { MethodDescriptor } from "react-docgen";
import Methods from "rsg-components/Methods";

const Usage: React.FunctionComponent<{
  props: { methods: MethodDescriptor[] };
}> = ({ props: { methods } }) => {
  return <Methods methods={methods} />;
};

Usage.propTypes = {
  props: PropTypes.shape({
    methods: PropTypes.array.isRequired
  }).isRequired
};

export default Usage;
