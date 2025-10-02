# AGENTS.md

## Project Purpose and Overview

This repository supports a dual-content production pipeline focusing on creative story development and AI-driven visual content generation. The project produces two main types of YouTube content:

1. **Long-Form Story Production**: Creating detailed narratives from raw ideas, segmenting stories into snippets, generating visual assets (images) using AI (e.g., NanoBanana), and producing long-form videos through tools like Google Flow and VEO-3.

2. **Short-Form BTS and Process Videos**: Documenting the behind-the-scenes workflow, process insights, scripting, recording, editing, and publishing short-form content that showcases creative and technical processes.

The repository organizes all stages of story creation, visual generation, video production, and both content types publishing with a focus on iterative improvement and quality control.

---

## Folder Structure & Best Practices

### General Principles
- Maintain clear, consistent naming conventions, including timestamps and version tags.
- Use nested folders to separate distinct workflow phases (ideation, drafts, assets, video projects, reviews, final outputs).
- Keep raw, work-in-progress (WIP), and final versions clearly separated.
- Document changes thoroughly in commit messages and metadata files.
- Archive old or unused assets and drafts to reduce clutter.

### Main Folder Overview

ProjectRoot/
├── LongForm_StoryProduction/
│ ├── 01_Idea/
│ ├── 02_Draft/
│ │ ├── main_plot.md
│ │ ├── sub_plots/
│ │ │ ├── subplot1.md
│ │ │ ├── subplot2.md
│ │ │ └── ...
│ │ ├── character_profiles.md
│ │ └── timelines.md
│ ├── 03_Snippets/
│ ├── 04_VisualAssets/
│ ├── 05_Sync/
│ ├── 06_VideoDraft/
│ ├── 07_Review/
│ └── 08_Final/
│
└── ShortForm_BTSProcess/
├── 01_Ideas/
├── 02_Scripting/
├── 03_Recording/
├── 04_Editing/
├── 05_Review/
└── 06_FinalPublish/

text

---

## Writing and Content Creation Best Practices for LLM Agents

### Story and Script Writing
- Emphasize clarity, coherence, and narrative flow in story drafts.
- Break stories into concise, context-rich snippets for visual prompt generation.
- Maintain tone and style consistency throughout iterations.
- Scripts for BTS/process videos should clearly explain workflow steps and technical insights.

### Prompt and Metadata Generation
- Generate descriptive, precise visual prompts for each snippet.
- Record prompt versions, model parameters, and generation notes for reproducibility.
- Maintain sync notes cross-referencing story snippets and visuals.

### Repository Maintenance
- Commit changes atomically with meaningful messages.
- Update documentation to reflect structural or procedural changes.
- Archive deprecated drafts/assets with version tags.
- Use consistent markdown formatting throughout.

### Iteration and Feedback
- Incorporate review feedback methodically; document in `review_notes.md`.
- Prioritize incremental improvements in story and visuals.
- Manage task lists clearly in `todo_list.md`.

---

## Setup Tasks for New Story Development Repository

When starting a new story development project from scratch, perform the following setup using this `agents.MD` as a template and guide:

1. **Initialize Repository Structure:**
   - Create the root project folder.
   - Inside, create the two main branches of content production:

LongForm_StoryProduction/
└── 01_Idea/
└── 02_Draft/
├── main_plot.md
├── sub_plots/
│ ├── subplot1.md
│ └── subplot2.md
├── character_profiles.md
└── timelines.md
└── 03_Snippets/
└── 04_VisualAssets/
├── draft_images/
└── final_images/
└── 05_Sync/
└── 06_VideoDraft/
├── google_flow_project/
└── veo3_project/
└── 07_Review/
└── 08_Final/

text
undefined
ShortForm_BTSProcess/
└── 01_Ideas/
└── 02_Scripting/
└── 03_Recording/
└── 04_Editing/
└── 05_Review/
└── 06_FinalPublish/

text

2. **Create Initial Files:**
   - Populate `01_Idea/concept.txt` with raw story idea or logline.
   - Add empty draft files in `02_Draft/` such as `main_plot.md`, placeholders under `sub_plots/`, `character_profiles.md`, and `timelines.md`.

3. **Initialize Supporting Files:**
   - Create empty `todo_list.md` and `review_notes.md` in the Review folders.
   - Prepare placeholders for snippet prompts in `03_Snippets/snippet_PROMPTS/`.
   - Set up README.md summarizing the project goals and folder structure.

4. **Document Best Practices:**
   - Add this `agents.MD` file at the root for ongoing LLM reference.
   - Maintain consistent commit messages and iterative workflows as outlined.

Following this setup ensures the project repository is organized, scalable, and ready for iterative story and video production workflows.

---

## Summary

This repository is designed as a modular, iterative environment for AI-assisted storytelling, visual asset creation, and multi-format video production. LLM agents should use this guide to maintain structure, uphold best practices, and support consistent, high-quality content generation and project management.

All changes and new content should respect repository conventions and be clearly documented for traceability.
