import React from "react";
import PropTypes from "prop-types";
import renderTypeColumn from "./renderType";
import renderExtra from "./renderExtra";
import renderDefault from "./renderDefault";
import { PropDescriptorWithFlow } from "./util";

function renderDescription(prop: PropDescriptorWithFlow) {
  const { description, tags = {} } = prop;
  const extra = renderExtra(prop);
  const args = [
    ...(tags.arg || []),
    ...(tags.argument || []),
    ...(tags.param || [])
  ];
  const returnDocumentation =
    (tags.return && tags.return[0]) || (tags.returns && tags.returns[0]);

  return (
    <div>
      {description}
      {returnDocumentation}
      {args}
      {extra}
    </div>
  );
}

function renderName(prop: PropDescriptorWithFlow) {
  const { name } = prop;
  return <div>{name}</div>;
}

export function getRowKey(row: { name: string }) {
  return row.name;
}

export const columns = [
  {
    caption: "Prop name",
    render: renderName
  },
  {
    caption: "Type",
    render: renderTypeColumn
  },
  {
    caption: "Default",
    render: renderDefault
  },
  {
    caption: "Description",
    render: renderDescription
  }
];

interface PropsProps {
  props: PropDescriptorWithFlow[];
}

const PropsRenderer: React.FunctionComponent<PropsProps> = ({ props }) => {
  return (
    <div>
      {columns}
      {props}
    </div>
  );
};

PropsRenderer.propTypes = {
  props: PropTypes.array.isRequired
};

export default PropsRenderer;
