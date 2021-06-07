# TedTube Demo

This project is a demo for Algolia's search platform. It is built using their [React InstantSearch API](https://github.com/algolia/react-instantsearch)

It is a current work in progress and this first incremental version is a single-page search application which allows you to search and watch over 2,300 Ted Talk videos by name, speaker, description, event name, content tags, and date. The options on the left are various "tags" related to the videos and can help you begin or refine your search. Clicking on a video will bring up a modal with the title, speaker, event name, number of views, and the top 5 tags associated with the video. From there, you can either close the modal to continue browsing or click the watch button which makes a call to the YouTube search api, retreives the video id, and replaces the cover image with an embedded iframe.

##### Logical next steps include:
- account creation and management
- saving or favoriting videos to an account for easier access
- sharing videos
- adding a comment section
- further fleshed out and responsive UI
- and more
