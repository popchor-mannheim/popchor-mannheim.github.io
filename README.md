# Webpage Popchor Mannheim

The webpage of popchor Mannheim is planned to strengthen our digital presence beyond social media platforms. It shall be a simple yet delightful webpage which is inline with our brand strategy and conveys professionalism.

## Goals
Provide basic information about the choir publicly:
- Who are we
- What do we stand for
- Where and when do we rehearse
- News (like press articles)
- Next planned performances
- Pictures
- Embedded media from other platforms (e. g. from youtube)

## Non-Goals

#### No web shop
It's a non-goal to provide web shop functionality (ticket platform, merch shop). Reasoning: As long as we don't do business via the website, we don't have to fulfill a bunch of regulatory requirements (EU digital services act and so on)

#### No internal area
It's a non-goal to share choir internal information via the website. This implies there is no "secured" area with additional content for choir members. Reasoning: There are enough tools out there to do exactly that and anything we built customly for our website will never be as good as existing. In addition, the effort of providing sites for an authorized set of users is much higher compared to a fully publicly website.

## Technical considerations

#### Simple and fast
The webpage should be simple, fast to develop and also fast for end users. Rely on basic web technologies as much as possible.

#### Open
Build the webpage in a way that allows us to choose our hosting provider freely instead of vendor lock-in.

#### Privacy for users
Respect end users and avoid storing cookies/data on user devices as much as possible.

## Tech stack
Based on goals, non-goals and technical considerations, [Github Pages](https://docs.github.com/en/pages) is chosen for our website together with the static side generator [Jekyll](https://jekyllrb.com/docs/). This combination has many advantages:
- the whole website content can be managed from a github repository
  - new features can be shipped continuously
  - full version history, go back to a previous version at any point in time
- webpages can be expressed as simple [markdown](https://www.markdownguide.org/getting-started/).
  - allows non-technicans to edit webpage content
  - fully customizable and flexible with fallback to standard HTML
- hosting is fully taken over by github at no cost, we only require a custom domain
- minimal attack surface as the build output is static file content, served via https

Disadvantages:
- Github pages offers no insights on webpage hits.
- Github is not suitable for large binary files (e. g. picture/audio/video files). A file should not exceed 25MB.

To mitigate the distadvantages, we could consider a switch to [Cloudfare Pages](https://pages.cloudflare.com/) which comes with basic statistics out of the box. This should be rather simple as we can continue to use the github repository as source for the webpage. For audio and video files, the assumption is that we upload them to other public platforms (e. g. youtube) as they are public content anyways and then we can just embed them into our webpage.
