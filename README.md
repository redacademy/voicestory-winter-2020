# VoiceStory

"The VoiceStory Foundation tackles the issue of social isolation that is prevalent in society today, which is caused by a number of issues including working remotely, addiction to mobile devices, the obsession with social media, reduced face to face interaction and the lack of spaces which promote deeper conversations and connection.
This is done through our monthly speaking platform – VoiceStory Live, educational workshops, mentorship and coaching to develop an individual’s ability to embrace and share their unique stories."
\- [Voice Story](https://www.voicestory.ca/)

## Screenshots

## Project Description

The VoiceStory App allows the user to find speakers, videos and events, past or present, at Voicestory in one mobile React Native application. The user is able to favourite the select video and will be able to read up on the speaker. The main features of this project include:

- A collection of speakers that the user can inspect the profiles of, and includes options to view LinkedIn, Facebook, and email the speaker.
- Videos directly pulled via the Youtube Data V3 API from [Voice Story's Youtube channel](https://www.youtube.com/voiceStory) and sorted by newest, most viewed, and themes relative to Voice Story's channel playlists
- Embedded video player which allows the user, given wifi/data availability, to watch any of the Youtube videos received from the Youtube Data V3 API call as well as add it to their favourite videos
- A list of all past and upcoming events which include all the necessary information for the user: date/time, address, price, description, and relative speaker
- Google Geocoder API integration with the events, which uses the event's address to find the relative Latitude/Longitude then uses IOS maps to find directions for the user
- Ticket purchasing UX/UI integration
- A collection of all the users previously 'purchased' tickets and a QR code for each ticket
- A user profile where the user can find all their favourited videos, options to apply to be a new speaker, and download videos
- Search integration to find any relative event, speaker, or video
- Notifications sorted by today, this week, and this month time frames

future considerations of this project include:

- Integrate secure ticket purchasing
- Create a unique bar code or QR code for each secure purchase
- Acquire commercial quota for Youtube and Geocoder API's
- Update theme lists to better represent Voice Story channel playlist names
- Integrate download video feature
- Integrate 'Add to Calendar' feature for events
- Update user preferences in settings
- integrate functionality for settings options
- Add "Apply to be a Speaker" functionality

### Installation

## Server

```bash
yarn install
```

## Client

```bash
yarn installcd iospod install
```

## Run - (./client)

```bash
yarn ios
```

## Run - (./server)

```bash
yarn dev
```

## Technologies Used & Key Learnings

- React Native
- GraphQL
- Prisma
- Javascript
- IOS/Android mobile device development
- Mobile App project structure

## Author

- Ivan
  - https://www.linkedin.com/in/ivan-dai/
  - https://github.com/Ivandaixiv
- Kieran
  - https://www.linkedin.com/in/KieranDevlin
  - https://github.com/KieranDevlin
- Ken
  - https://www.linkedin.com/in/khuang-dev/
  - https://github.com/khuang-dev
- Ian
  - https://www.linkedin.com/in/ian-doornbosch-21a049138/
  - https://github.com/IED92
