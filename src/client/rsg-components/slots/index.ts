import Usage from "rsg-components/Usage";
import IsolateButton from "rsg-components/slots/IsolateButton";
import CodeTabButton from "rsg-components/slots/CodeTabButton";
import UsageTabButton from "rsg-components/slots/UsageTabButton";

export const EXAMPLE_TAB_CODE_EDITOR = "rsg-code-editor";
export const DOCS_TAB_USAGE = "rsg-usage";

const toolbar = [IsolateButton];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (config?: any) => {
  return {
    sectionToolbar: toolbar,
    componentToolbar: toolbar,
    exampleToolbar: toolbar,
    exampleTabButtons: [
      {
        id: EXAMPLE_TAB_CODE_EDITOR,
        render: CodeTabButton
      }
    ],
    docsTabButtons: [
      {
        id: DOCS_TAB_USAGE,
        render: UsageTabButton
      }
    ],
    docsTabs: [
      {
        id: DOCS_TAB_USAGE,
        render: Usage
      }
    ]
  };
};
