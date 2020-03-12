import React from "react";
import PropTypes from "prop-types";
import { MethodDescriptor } from "react-docgen";

const MethodsRenderer: React.FunctionComponent<{
  methods: MethodDescriptor[];
}> = ({ methods }) => <div>{methods}</div>;

MethodsRenderer.propTypes = {
  methods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      returns: PropTypes.object,
      params: PropTypes.array,
      tags: PropTypes.object
    }).isRequired
  ).isRequired
};

export default MethodsRenderer;
