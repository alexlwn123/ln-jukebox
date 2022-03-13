# Pleb.FM

![Auction Screen](https://user-images.githubusercontent.com/43247027/158082232-07c9724c-515a-4987-8632-e7aac93ebfd7.png)
![Mobile Landing](https://user-images.githubusercontent.com/43247027/158082336-2917a6dd-89f3-4582-bb94-360eba22f45c.png)
![Mobile Auction](https://user-images.githubusercontent.com/43247027/158082329-2afbcf29-4833-4cda-a5d2-42c6bb18cb63.png)

Try it out (kinda) at [pleb.fm](https://pleb.fm)

This is the first crowd-funded DJ powered by bitcoin lightning! It's an ongoing auction to decide the next song in the queue.

## Screens
 - [/](https://pleb.fm) - landing page to submit bids
 - [/leaderboard](https://pleb.fm/leaderboard) - Live View of Active Bids
 - [Figma Screens](https://www.figma.com/file/BG8ckeH3RYYPEFuzDDSSpZ/ln-jukebox?node-id=2%3A67) - UX Design

## Tech Stack
 - Next.js
 - Voltage
 - Spotify API (wip)
 - GCP Firestore to store songs

## TODO
 - Fix Leaderboard
 - Fix (implemnt) Music Player
 - Fix lnpayments on prod 
 - Improve mobile UX
 - Actually secure it
 
 
---- 
Next JS Stuff

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
