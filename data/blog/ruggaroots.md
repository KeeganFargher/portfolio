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

## What was my role in all of this?

I was responsible for:

- Managing expectations on behalf of the dev team
- Architecting and maintaining the web portal
- Leading the backend team, delegating work and ensuring code quality
- Writing Unit, Integration and End-to-End tests through xUnit and Cypress
- Setting up CI / CD for our backend through Azure Devops

## How we solved it

Rugga Roots wanted a rebuild and improvement of their old system — one small issue however; The system had been shut down and the only thing we had to go off was screenshots. Adding fuel to the fire, this needed to be completed in 6 weeks using a new framework, new architecture and writing tests for the first time! 😅

We assembled a team of 6 developers and begin looking through the screenshots, trying to map relationships and define domain boundaries. It took a few late nights and many whiteboard markers but we felt comfortable enough with our schema to move forward and start delegating out work.

We knew we would miss things and make mistakes so we decided to hold weekly demos with our client — ensuring we don't go too far off course.

> Firstly I just want to say we really like the system so far. The look and flow is awesome! Can’t wait to start using it.

## Challenges

**Only storing the minimum data needed:** We made the mistake of only storing / keeping track of the data needed at the time and not thinking about future requirements. This came back to bite us a few times when the client asked for a new report or new requirement and we didn't have data for it.

At the bare minimum we now keep an audit log of changes made so if new reports are needed we are able to replay the audit log.

## How did it all turn out?

Great! The client loved it and we've just wrapped up phase 3. The app is live on both stores and the client is in the process of migrating their users onto the platform! 🥳

> We just want to thank you guys for your hard work and your professionalism you put into your work. It paid off.
