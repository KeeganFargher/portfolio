---
title: 'USA Poultry and Egg Export Council (USAPEEC)'
date: '2021-03-28'
tags: ['.NET Core', 'React Native', 'TypeScript', 'SignalR']
draft: false
summary: 'A cross platform, offline first, multi-lingual, real-time mobile application and an admin portal that bridges the gap between food product importers worldwide and exporters of U.S. poultry and egg products.'
layout: PostSimple
---

USA Poultry and Egg Export Council's (USAPEEC) mission is to promote exports of U.S. poultry and eggs around the world. USAPEEC is the bridge between food product importers worldwide and exporters of U.S. poultry and egg products. The Council's 200+ member companies account for more than 95% of all the poultry and eggs exported from the U.S.

## The Brief / Challenge

The overarching aim of the project was to develop an admin portal and a mobile app that connected food product importers and exports of U.S poultry and egg products through:

- A real time chat application
  - Allowing cross platform communication between importers and exporters
  - Sending bulk messages to curated groups of users
- Viewing upcoming trade shows & events
  - The ability for admins to send real time event invitations to users and generating personalized emails for their invitations
- Viewing trade data for countries in Sub-Saharan Africa
- A "Bulletin Board" for users to post questions and get responses from other users

## Some of the highlights

**Offline access and data persistence:** Many users of the app would be situated in areas with little to no connectivity. This meant that the app needed to seamlessly work offline. It also needed to work on low end devices and small screen sizes.

**Multi-Lingual:** The app needed to be localized in English, French and Portuguese -- even the data coming from our servers.

**International time zones:** Users needed to be served messages in their correct time zone. A user sending a message from South Africa should see the sent time at 1 PM but the receiver in London should see the sent time as 12 PM.

## What was my role in all of this?

I was responsible for:

- Liaising with the QA team / Business Analyst / Project Manager and managing expectations on behalf of the dev team
- Architecting and maintaining the app and web portal
- Leading the mobile and backend team, delegating work and ensuring code quality
- Writing Unit, Integration and End-to-End tests
- Setting up CI / CD for both our mobile app and backend

## How we solved it

Once the planning and analysis phase had been completed -- we received the requirements along with wireframes and kicked off development.

We begun by using the requirements and wireframes to design our database and define clear domains to better help architect our system.

![drawSQL-export-2021-07-25_20_51.png](https://cms.keeganfargher.co.za/uploads/draw_SQL_export_2021_07_25_20_51_b5a07d7100.png?52271.39999999106)

From there, we begun deciding on what tech stack to use.

For our **backend**, we decided to use .NET Core along with MySQL for persistence and Hangfire for background processing. It is our bread and butter and what the team is most comfortable using. We also went with SignalR for real-time communication.

For our **app**, we used React Native in combination with SignalR which provided us with real-time capabilities and Redux with Redux-Persist to store data which allowed users to still access data even when they were offline.

## Challenges

**Mixing offline-first and real-time is hard:** Trying to maintain a web socket connection while having little to no connectivity is difficult. We got around this by pinging our API every x seconds and determining if we are online or not. Only if we could ping our API would we attempt to re-establish our websocket connection. After too many retries we would fallback to long polling.

For sending data, we pushed all of our actions into a queue in Redux and only dispatched them if we had connectivity, with a backoff retry policy if the dispatched actions timed out.

**Prefetching data isn't always the way to go:** We made a decision at the start of development to fetch and store all data when the app loads up. This ended up being 10 - 15 API calls every time the app opens, to fetch all countries, events & trade shows, chats, etc.

While this did not make or break the app -- if I had to start this system from scratch today, I would either make one API call which returns all the data or pass in a date to the API to only fetch missing data.

## How did it all turn out?

Great! The client loved it and we've just wrapped up phase 3.

## Happy quote from the client ?
