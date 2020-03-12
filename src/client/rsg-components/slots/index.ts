import Usage from "rsg-components/Usage";
export const DOCS_TAB_USAGE = "rsg-usage";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (config?: any) => {
  return {
    docsTabs: [
      {
        id: DOCS_TAB_USAGE,
        render: Usage
      }
    ]
  };
};
