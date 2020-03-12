import React from "react";
import PropTypes from "prop-types";
import { MethodDescriptor } from "react-docgen";

export const columns = [
  {
    caption: "Method name",
    // eslint-disable-next-line react/prop-types
    render: ({ name }: MethodDescriptor) => <div>{`${name}()`}</div>
  },
  {
    caption: "Parameters",
    // eslint-disable-next-line react/prop-types
    render: ({ params = [] }: MethodDescriptor) => <div>{params}</div>
  },
  {
    caption: "Description",
    // eslint-disable-next-line react/prop-types
    render: ({ description, returns, tags = {} }: MethodDescriptor) => (
      <div>
        {description && <div>{description} </div>}
        {returns && <b>{returns}</b>}
        {tags}
      </div>
    )
  }
];

const MethodsRenderer: React.FunctionComponent<{
  methods: MethodDescriptor[];
}> = ({ methods }) => (
  <div>
    {columns}
    {methods}
  </div>
);

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
