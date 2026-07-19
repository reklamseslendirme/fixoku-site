import { attentionFocusContentByPath } from "./attentionFocusContent.js";
import { fixokuEducationContentByPath } from "./fixokuEducationContent.js";
import { quickReadingContentByPath } from "./quickReadingContent.js";

export const contentCatalogByPath = {
  ...quickReadingContentByPath,
  ...attentionFocusContentByPath,
  ...fixokuEducationContentByPath,
};
