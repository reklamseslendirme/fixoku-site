import { attentionFocusContentByPath } from "./attentionFocusContent.js";
import { quickReadingContentByPath } from "./quickReadingContent.js";

export const contentCatalogByPath = {
  ...quickReadingContentByPath,
  ...attentionFocusContentByPath,
};
