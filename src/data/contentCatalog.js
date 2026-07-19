import { attentionFocusContentByPath } from "./attentionFocusContent.js";
import { blogContentByPath } from "./blogContent.js";
import { fixokuEducationContentByPath } from "./fixokuEducationContent.js";
import { knowledgeCenterContentByPath } from "./knowledgeCenterContent.js";
import { quickReadingContentByPath } from "./quickReadingContent.js";

export const contentCatalogByPath = {
  ...quickReadingContentByPath,
  ...attentionFocusContentByPath,
  ...fixokuEducationContentByPath,
  ...knowledgeCenterContentByPath,
  ...blogContentByPath,
};
