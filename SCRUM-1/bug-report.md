# QA Report — SCRUM-1
**Deployment URL:** https://app-bl5s1s40p-salman-shakeel-s-projects.vercel.app
**Tested at:** 2026-05-18 12:35 UTC
**Overall status:** PARTIAL

## Test Results
| Acceptance Criterion | Result | Notes |
|----------------------|--------|-------|
| Add a todo item via input and button | ✅ PASS |  |
| Mark a todo as complete with strikethrough | ❌ FAIL | Locator.check: Target page, context or browser has been closed
Call log:
  - waiting for locator(".todo-item input[type= |
| Show count of remaining incomplete items | ❌ FAIL | Page.inner_text: Target page, context or browser has been closed |
| Delete a todo item | ❌ FAIL | Locator.fill: Target page, context or browser has been closed |
| Todos persist in localStorage after interaction | ❌ FAIL | Page.evaluate: Target page, context or browser has been closed |

**Summary:** 1 passed, 4 failed out of 5 criteria.

## Console Errors
- [error] Failed to load resource: the server responded with a status of 401 ()
- [error] Loading the font 'https://k2mkucxia43oc7fa.public.blob.vercel-storage.com/front/fonts/space-mono/space-mono-v11-latin-regular.woff2' violates the following Content Security Policy directive: "font-src 'self' *.vercel.com *.gstatic.com vercel.live". The action has been blocked.
- [warning] [GSI_LOGGER]: Your client application uses one of the Google One Tap prompt UI status methods that may stop functioning when FedCM becomes mandatory. Refer to the migration guide to update your code accordingly and opt-in to FedCM to test your changes. Learn more: https://developers.google.com/identity/gsi/web/guides/fedcm-migration?s=dc#display_moment and https://developers.google.com/identity/gsi/web/guides/fedcm-migration?s=dc#skipped_moment
- [warning] Deprecated API for given entry type.
- [error] Failed to load resource: the server responded with a status of 403 ()
- [error] Provider's accounts list is empty.
- [error] Failed to load resource: the server responded with a status of 404 (File not found)

## Screenshots
- screenshot-01-initial-load.png

## Summary
4 criterion/criteria failed. Review the table and screenshots for details.
