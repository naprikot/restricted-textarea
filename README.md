# Restricted Textarea

A solution to the [Restricted Textarea](https://roadmap.sh/projects/restricted-textarea) challenge on [roadmap.sh](https://roadmap.sh).

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Project-blue?style=for-the-badge&logo=vercel)](https://naprikot.github.io/restricted-textarea/) 

## The Challenge

Create a textarea that tracks and displays the number of characters typed by the user in real-time, along with a maximum character limit. Once the limit is reached, the textarea must prevent further input, and the border must turn red to visually indicate the limit has been hit.

## Approach

- **Native Input Blocking**: Rather than using JavaScript to intercept key presses and truncate strings, the native HTML `maxlength` attribute is utilized. This lets the browser handle input restriction naturally, perfectly handling edge cases like pasting large blocks of text.
- **Dynamic JavaScript**: The JavaScript logic extracts the maximum limit directly from the HTML `maxlength` attribute. This creates a single source of truth—updating the limit in the HTML automatically updates the JS logic without hardcoding values.
- **Visual Stability**: Applied `font-variant-numeric: tabular-nums;` to the character counter. Because standard fonts use proportional numbers (where a "1" is narrower than an "8"), the counter can jitter horizontally as you type. Tabular numbers force equal width, keeping the layout perfectly still.
- **Accessibility (A11y)**: The textarea uses `aria-describedby` to link directly to the counter element. The counter features `aria-live="polite"` to ensure screen readers announce updates without aggressively disrupting the user's flow.

## Built With

- Semantic HTML5
- CSS (Custom properties, Pseudo-classes, Font-variant adjustments)
- Vanilla JavaScript (Event listeners, DOM manipulation)
