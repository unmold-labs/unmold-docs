---
title: "Unmold Weekly #2: Token Usage and Expiration"
description: "This post introduces the new feature to support showing a user token's last use time and setting expiration date."
slug: "unmold-weekly-2"
authors: [unmold-developer-team]
tags: [product, weekly]
---

This week we added better lifecycle visibility and control for user tokens in Unmold.

You can now:

* see when each token was last used
* set a custom expiration date when creating a token
* rely on automatic expiration validation during token authentication

<!-- truncate -->

### Why this matters

Token sprawl and long-lived credentials are common security and operations pain points.
With this update, teams can more easily answer:

* Which tokens are still active?
* Which tokens have gone stale and should be removed?
* How can we issue short-lived tokens for CI jobs and automation?

This helps tighten access control without disrupting day-to-day workflows.

### Operational guidance

To get the most value from this feature:

* use short-lived tokens for CI and automation jobs
* periodically review and rotate stale tokens
* set explicit expirations for external integrations

This release is part of our ongoing work to make Unmold module publishing both simple and secure.

### Related docs

Want to apply this in your workflow right away?

* [Create and manage API tokens](/docs/getting-started/managing-api-tokens)
* [Use modules with token authentication](/docs/module/usage)
* [Set up CI publishing with Unmold tokens](/docs/ci)
