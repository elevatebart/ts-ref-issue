import React from "react";
import PropTypes from "prop-types";
import { MethodDescriptor } from "react-docgen";
import { PropDescriptorWithFlow } from "rsg-components/Props/util";
import Methods from "rsg-components/Methods";
import isEmpty from "lodash/isEmpty";

const Usage: React.FunctionComponent<{
  props: { methods?: MethodDescriptor[] };
}> = ({ props: { methods } }) => {
  const methodsNode = methods && !isEmpty(methods) && (
    <Methods methods={methods} />
  );

  if (!methodsNode) {
    return null;
  }

  return <div>{methodsNode}</div>;
};

Usage.propTypes = {
  props: PropTypes.shape({
    methods: PropTypes.array
  }).isRequired
};

export default Usage;
