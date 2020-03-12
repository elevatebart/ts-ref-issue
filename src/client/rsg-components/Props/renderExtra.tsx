import React from "react";
import Group from "react-group";
import Type from "rsg-components/Type";

import { unquote, getType, showSpaces, PropDescriptorWithFlow } from "./util";
import renderDefault from "./renderDefault";
import { renderType } from "./renderType";

function renderEnum(prop: PropDescriptorWithFlow): React.ReactNode {
  const type = getType(prop);
  if (!type) {
    return undefined;
  }
  if (!Array.isArray(type.value)) {
    return <span>{type.value}</span>;
  }

  const values = type.value.map(({ value }) => (
    <div key={value}>{showSpaces(unquote(value))}</div>
  ));
  return (
    <span>
      One of: <Group separator=", ">{values}</Group>
    </span>
  );
}

function renderUnion(prop: PropDescriptorWithFlow): React.ReactNode {
  const type = getType(prop);
  if (!type) {
    return undefined;
  }
  if (!Array.isArray(type.value)) {
    return <span>{type.value}</span>;
  }

  const values = type.value.map((value, index) => (
    <Type key={`${value.name}-${index}`}>{renderType(value)}</Type>
  ));
  return (
    <span>
      One of type: <Group separator=", ">{values}</Group>
    </span>
  );
}

function renderShape(props: Record<string, PropDescriptorWithFlow>) {
  return Object.keys(props).map(name => {
    const prop = props[name];
    const defaultValue = renderDefault(prop);
    const description = prop.description;
    return (
      <div key={name}>
        {": "}
        <Type>{renderType(prop)}</Type>
        {defaultValue && " — "}
        {defaultValue}
        {description && " — "}
      </div>
    );
  });
}

export default function renderExtra(
  prop: PropDescriptorWithFlow
): React.ReactNode {
  const type = getType(prop);
  if (!prop.type || !type) {
    return null;
  }
  switch (type.name) {
    case "enum":
      return renderEnum(prop);
    case "union":
      return renderUnion(prop);
    case "shape":
      return renderShape(prop.type.value);
    case "arrayOf":
      if (type.value.name === "shape") {
        return renderShape(prop.type.value.value);
      }
      return null;
    case "objectOf":
      if (type.value.name === "shape") {
        return renderShape(prop.type.value.value);
      }
      return null;
    default:
      return null;
  }
}
