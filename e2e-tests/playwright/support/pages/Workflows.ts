/* eslint-disable @backstage/no-undeclared-imports */
import { Page } from "@playwright/test";

const workflowsTable = (page: Page) =>
  page
    .locator("#root div")
    .filter({ hasText: "Workflows" })
    .nth(2);

const Workflows = {
  workflowsTable,
};

export default Workflows;
