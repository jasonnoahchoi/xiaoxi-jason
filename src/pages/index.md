---
template: home
menus:
  main:
    weight: 1
    title: Home
sections:
  - type: intro
    component: Intro
    actions:
      - is_scrolly: true
        is_primary: false
        label: Learn more
        url: '#one'
    background_style: style1
    section_id: intro
    subtitle: |-
      Cras aliquam amet adipiscing nibh faucibus suscipit ut Parturient  
      col accumsan est arcu donec sed Eleifend Integer.
    title: Hyperspace
  - type: spotlights
    component: Spotlights
    section_id: one
    background_style: style2
    title: Spotlights Section
  - type: features
    component: Features
    actions:
      - is_scrolly: false
        is_primary: false
        label: Learn more
        url: /generic
    features_list:
      - icon: fa-code
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        title: Lorem ipsum amet
      - icon: fa-lock
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        title: Aliquam sed nullam
      - icon: fa-cog
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        title: Sed erat ullam corper
      - icon: fa-desktop
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        title: Veroeros quis lorem
      - icon: fa-chain
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        title: Urna quis bibendum
      - icon: fa-diamond
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        title: Aliquam urna dapibus
    background_style: style3
    section_id: two
    title: What we do
    subtitle: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
  - type: contact
    component: Contact
    social:
      social_icons:
        - url: '#'
          title: Twitter
          icon: fa-twitter
        - url: '#'
          title: Facebook
          icon: fa-facebook
        - url: '#'
          title: GitHub
          icon: fa-github
        - url: '#'
          title: Instagram
          icon: fa-instagram
        - url: '#'
          title: LinkedIn
          icon: fa-linkedin
      title: Social
    contact_list:
      - text: |-
          12345 Somewhere Road #654
          Nashville, TN 00000-0000
          USA
        title: Address
      - url: '#'
        text: user@Hyperspace.tld
        title: Email
      - text: (000) 000-0000
        title: Phone
    background_style: style1
    section_id: three
    text: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    title: Get in touch
sidebar:
  entries:
    - is_primary: true
      url: '#intro'
      title: Welcome
    - is_primary: false
      url: '#one'
      title: Who we are
    - is_primary: false
      url: '#two'
      title: What we do
    - is_primary: false
      url: '#three'
      title: Get in touch
title: Home
---

