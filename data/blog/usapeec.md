---
title: 'USA Poultry and Egg Export Council (USAPEEC) — Case Study'
date: '2021-03-28'
tags: ['Case Study', 'Technical']
draft: false
summary: 'A cross platform, offline first, multi-lingual, real-time mobile application and an admin portal that bridges the gap between food product importers worldwide and exporters of U.S. poultry and egg products.'
images: ['/static/images/usapeec.jpg']
layout: PostSimple
---

![usapeec-banner](/static/images/usapeec.jpg)

USA Poultry and Egg Export Council's (USAPEEC) mission is to promote exports of U.S. poultry and eggs around the world. USAPEEC is the bridge between food product importers worldwide and exporters of U.S. poultry and egg products. The Council's 200+ member companies account for more than 95% of all the poultry and eggs exported from the U.S.

## The Brief / Challenge

The overarching aim of the project was to develop an admin portal and a mobile app that connected food product importers and exports of U.S poultry and egg products through:

### A real time chat application

- Allowing cross platform communication between importers and exporters
- Sending in-app targeted bulk messages to curated groups of users e.g. users who have not yet responded to x event

### Viewing upcoming trade shows & events

- The ability for admins to send real time event invitations to users and generating personalized emails for their invitations

### Viewing trade data for countries in Sub-Saharan Africa

- Comparing yearly and monthly data

### A "Bulletin Board" for users to post questions and get responses from other users

- Ability to send inquiries, attach pricing lists and quickly respond via the chat service

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

We begun by using the requirements and wireframes to design our database and define clear domains to better help architect our system. Below you can see a simplified version of our database:

![ERD](/static/images/usapeec/ERD.png)

From there, we begun deciding on what tech stack to use.

For our **backend**, we decided to use .NET Core along with MySQL for persistence and Hangfire for background processing. It is our bread and butter and what the team is most comfortable using. We also went with SignalR for real-time communication.

For our **app**, we used React Native in combination with SignalR which provided us with real-time capabilities and Redux with Redux-Persist to store data which allowed users to still access data even when they were offline.

## Challenges

**Mixing offline-first and real-time is hard:** Trying to send real time messages while having little to no connectivity is difficult. Especially if you are only checking for connectivity every few seconds. We got around this by pushing all of our actions into a queue in Redux and only dispatched them if we had connectivity, with a backoff retry policy if the dispatched actions timed out.

**Prefetching data isn't always the way to go:** We made a decision at the start of development to fetch and store all data when the app loads up. This grew quickly and ended up being 10 - 15 API calls every time the app opens, to fetch all countries, events & trade shows, chats, etc.

Future apps have to call a single endpoint on load, usually `/Config`, which has made our apps a lot easier to figure out when all data has been loaded, and makes expansion a lot easier.

**Not using Typescript:** Our team wasn't familiar with Typescript at the time and decided not to go with it. This was a big mistake and definitely allowed bugs to creep in and just slowed development down in general (what data is being returned from this API?). We decided all future projects would use Typescript with ESLint & Prettier.

## How did it all turn out?

Great! The client loved it and we've just wrapped up phase 3. The app is live on both stores and the client is in the process of migrating their users onto the platform! 🥳

> We just want to thank you guys for your hard work and your professionalism you put into your work. It paid off.
