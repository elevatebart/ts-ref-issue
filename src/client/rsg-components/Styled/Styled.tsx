import React, { Component, ComponentType } from "react";
import { Styles, Classes } from "jss";
import * as Rsg from "../../../typings";

export interface JssInjectedProps {
  classes: Classes;
}

export default function StyleHOC<P extends JssInjectedProps>(
  styles: (t: Rsg.Theme) => Styles<string>
): (
  WrappedComponent: ComponentType<P>
) => ComponentType<Omit<P, keyof JssInjectedProps>> {
  return (WrappedComponent: ComponentType<P>) => {
    const componentName = WrappedComponent.name.replace(/Renderer$/, "");
    return class extends Component<Omit<P, keyof JssInjectedProps>> {
      public static displayName = `Styled(${componentName})`;
      public constructor(props: Omit<P, keyof JssInjectedProps>) {
        super(props, {});
      }

      public render() {
        return <WrappedComponent {...({ ...this.props, classes: {} } as P)} />;
      }
    };
  };
}
