---
title: 'Vellux Africa — Case Study'
date: '2021-08-13'
tags: ['Case Study', 'Technical']
draft: true
summary: 'Building a pager system using a raspberry pi and azure event bus'
images: ['/static/images/usapeec.jpg']
layout: PostSimple
---

![banner](/static/images/ruggaroots/banner.png)

## Too Lazy; Didn't read

We built a system that sends [pager](https://en.wikipedia.org/wiki/Pager) events into an [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/) queue via a Raspberry PI and is picked up by our web server and notifies clients of the pager event in real time using Web Sockets.

## Not Lazy; Did Read

Raspberry PI picks up that the pager has gone off -> Raspberry PI pushes an event with some data such as the pager ID, time, location, etc., into our Azure Service Bus queue -> Our service picks up the new event and instantly notifies clients over web sockets and later writes it to our database -> our clients pick up the notification and present the pager event as an overlay on a TV screen
