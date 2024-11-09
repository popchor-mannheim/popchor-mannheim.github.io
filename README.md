# Webpage Popchor Mannheim

The webpage of popchor Mannheim is planned to strengthen our digital presence beyond social media platforms. It shall be a simple yet delightful webpage which is inline with our brand strategy and conveys proffesionalism.

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
It's a non-goal to provide web shop functionality (ticket platform, merch shop). Reasoning: As long as we don't do business via the website, we don't have to fullfil a bunch of regulatory requirements.

#### No internal area
It's a non-goal to share choir internal information via the website. This implies there is no "secured" area with additional content for choir members. Reasoning: There are enough tools out there to do exactly that and anything we built customly for our website will never be as good as existing. In addition, the effort of providing sites for an authorized set of users is much higher compared to a fully publicly website.

## Technical considerations

#### Simple and fast
The webpage should be simple, fast to develop and also fast for end users. Rely on basic web technologies as much as possible.

#### Open
Build the webpage in a way that allows us to choose our hosting provider freely instead of vendor lock-in.

#### Privacy for users
Respect end users and avoid storing cookies/data on user devices as much as possible.

# Tech stack
Based on goals, non-goals and technical considerations, [Github Pages](https://docs.github.com/en/pages) is chosen for our website together with the static side generator [Jekyll](https://jekyllrb.com/docs/). This combination has many advantages:
- the whole website content can be managed from a github repository
- full version history, go back at any point in time to a previous version
- webpages can be expressed as simple [markdown](https://www.markdownguide.org/getting-started/).
  - allows non-technicans to edit webpage content
  - fallback to hypertext markup in case of special requirements
- hosting is fully taken over by github at no cost, we only require a custom domain and a SSL certificate
- minimal attack surface as the build output is static file content, served via https
