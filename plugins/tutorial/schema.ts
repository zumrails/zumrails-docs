import * as Joi from "joi"
import {
  RemarkPluginsSchema,
  RehypePluginsSchema,
} from "@docusaurus/utils-validation"

import { TutorialPluginOptions } from "./types"

export const DEFAULT_OPTIONS: TutorialPluginOptions = {
  include: ["*.md", "*.mdx"],
  path: "tutorial",
  remarkPlugins: [],
  rehypePlugins: [],
  routeBasePath: "tutorial",
  truncateMarker: /<!--\s*(truncate)\s*-->/,
  tutorialDescription: "Tutorials",
  tutorialListComponent: "@theme/TutorialListPage",
  tutorialPostComponent: "@theme/TutorialPostPage",
  tutorialTitle: "Tutorials",
}

export const PluginOptionSchema = Joi.object({
  include: Joi.array().items(Joi.string()).default(DEFAULT_OPTIONS.include),
  path: Joi.string().default(DEFAULT_OPTIONS.path),
  remarkPlugins: RemarkPluginsSchema.default(DEFAULT_OPTIONS.remarkPlugins),
  rehypePlugins: RehypePluginsSchema.default(DEFAULT_OPTIONS.rehypePlugins),
  routeBasePath: Joi.string().default(DEFAULT_OPTIONS.routeBasePath),
  truncateMarker: Joi.object().default(DEFAULT_OPTIONS.truncateMarker),
  tutorialDescription: Joi.string().default(
    DEFAULT_OPTIONS.tutorialDescription,
  ),
  tutorialListComponent: Joi.string().default(
    DEFAULT_OPTIONS.tutorialListComponent,
  ),
  tutorialPostComponent: Joi.string().default(
    DEFAULT_OPTIONS.tutorialPostComponent,
  ),
  tutorialTitle: Joi.string().default(DEFAULT_OPTIONS.tutorialTitle),
})
