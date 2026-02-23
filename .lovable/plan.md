

## Neuro-Forensics: ChatGPT Mirror Tool

### Overview
A standalone single-page tool at `/chatgpt` that lets users upload their ChatGPT `conversations.json` export, strips out all AI responses client-side, and outputs only the user's own text for psychological analysis via NotebookLM.

**Aesthetic:** Dark/cybersecurity theme with neon purple accents -- completely independent from the parent site's lime/emerald branding.

**Language:** 100% Turkish UI.

---

### Files to Create

#### 1. `src/pages/ChatGPTMirror.tsx` (Main Page Component)

Single-page layout with 4 sections, all Turkish copy as specified:

- **Hero Section** -- headline, subheadline, CTA button (smooth scroll to upload), privacy micro-copy
- **Problem Section** -- 3 cards (Mikro Yonetim, Dusuk Tolerans, Optimizasyon Felci)
- **How it Works** -- 4 steps with icons
- **Upload/Processor Section** -- File dropzone, parsing logic, results display

Uses its own CSS variables (scoped via a wrapper class) for neon purple/electric blue accents instead of lime/emerald. Framer Motion for fade-up animations. Lucide icons throughout.

SEO: `noindex, nofollow` via Helmet (this is a tool page, not an SEO target).

#### 2. `src/utils/parseConversationsJson.ts` (Parser Logic)

Pure function that:
1. Takes raw JSON string, parses it
2. Iterates over conversation array
3. For each conversation, iterates `Object.values(conversation.mapping)`
4. Filters nodes where `node.message?.author?.role === "user"`
5. Extracts text from `node.message.content.parts` (joins string parts, ignores non-strings)
6. Returns single string with all user messages separated by double newlines

Wrapped in try/catch for error handling. Runs synchronously (JSON.parse handles large files fine in modern browsers).

#### 3. `src/components/chatgpt-mirror/FileDropzone.tsx`

Drag-and-drop component accepting `.json` files. Shows:
- Idle state: drop zone with upload icon
- Processing state: spinner + "Isleniyor..."
- Success state: textarea with results, "Kopyala" button, "Dosya Olarak Indir" button, NotebookLM prompt text
- Error state: error message

Uses `FileReader.readAsText()` then passes to parser. Uses `setTimeout(..., 0)` to defer parsing so the loading UI renders before the synchronous parse blocks.

### Files to Modify

#### 4. `src/App.tsx`

Add a new lazy-loaded route at `/chatgpt`:
- NO Navigation component (standalone page)
- NO Footer component
- Wrapped in `LanguageWrapper` for consistency

### Design Approach (Scoped Styling)

The page component will use a wrapper div with Tailwind classes using inline style overrides for the purple accent colors. This avoids polluting the global CSS variables. Key colors:
- Background: `#0a0a0f` (near-black with blue undertone)
- Accent: `#a855f7` (purple-500) and `#7c3aed` (violet-600)
- Text: white/gray scale
- Cards: `#111118` with purple border on hover

### Technical Details

- **File size handling:** `FileReader.readAsText()` handles up to 200MB. `JSON.parse` on the resulting string works in modern browsers for files this size.
- **UI responsiveness:** Parsing is deferred with `setTimeout` so the loading state renders before the synchronous parse runs.
- **Privacy:** Zero network requests. No file upload. Pure client-side processing.
- **Copy/Download:** Uses `navigator.clipboard.writeText()` for copy, creates a Blob + download link for `.txt` export.

