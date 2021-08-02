---
title: 'Rugga Roots — Case Study'
date: '2020-01-13'
tags: ['Case Study', 'Technical']
draft: false
summary: '6 weeks to build a complete system in a framework weve never used before, using a new architecture and writing tests for the first time, what could go wrong?'
images: ['/static/images/usapeec.jpg']
layout: PostSimple
---

![banner](/static/images/ruggaroots/banner.png)

Rugga Roots provides extra mural rugby for kids.

## The Brief / Challenge

Rugga Roots wanted a system that allowed them to manage their company through:

### Student Capturing

- Managing thousands of students across hundreds of schools
- Generating unique student numbers per school and allowing students to move schools without duplicates

### Managing Coach Sessions

- Managing thousands of coach sessions per day across many coaches
- Allowing coaches to capture thousands of attendance records per day

### Communication

- Sending scheduled, targeted and personalized SMSs to parents and coaches to inform them on changes to lessons or welcoming them to the extra mural

### Reports

- Generating reports on various aspects of the system such as viewing how many students a coach teaches or viewing an attendance log of a student

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

For our **backend**, we decided to use [.NET Core](https://dotnet.microsoft.com) along with [MySQL](https://www.mysql.com) for persistence and [Hangfire](https://www.hangfire.io) for background processing. It is our bread and butter and what the team is most comfortable using. We also went with SignalR for real-time communication.

For our **app**, we used [React Native](https://reactnative.dev) in combination with [SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr) which provided us with real-time capabilities and [Redux](https://redux.js.org) with Redux-Persist to store data which allowed users to still access data even when they were offline.

## Challenges

**Only storing the minimum data needed:** We made the mistake of only storing / keeping track of the data needed at the time and not thinking about future requirements. This came back to bite us a few times when the client asked for a new report or new requirement and we didn't have data for it.

At the bare minimum we now keep an audit log of changes made so if new reports are needed we are able to replay the audit log.

## How did it all turn out?

Great! The client loved it and we've just wrapped up phase 3. The app is live on both stores and the client is in the process of migrating their users onto the platform! 🥳

> We just want to thank you guys for your hard work and your professionalism you put into your work. It paid off.
