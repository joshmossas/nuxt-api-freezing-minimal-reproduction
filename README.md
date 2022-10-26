# Nuxt3 Api Server Frequently Freezing Reproduction

Minimal reproduction showcasing how the nuxt api server frequently freezes when using NX and Prisma. This was tested on a Windows 11 machine using Node version 18.12.0.

## Reproduction Instructions

1. Install dependencies by running `npm install`. This will also run `prisma generate` and `nuxt prepare` using the postinstall script

2. Start the dev server by running `npm run dev` (or `nx dev nuxt-app` if you have nx installed globally) and open http:localhost:3000

3. In your code editor navigate to `apps/nuxt-app/src/server/api/hello-world.get.ts`. Make changes here and refresh the browser window whenever changes are saved. After a couple changes you should run into the bug.

### Restarting after a freeze

Once the nuxt server starts freezing you need to do the following to get it working again.

1. Stop the nuxt server

2. Run `npm run clean` (or `nx clean nuxt-app`)

3. Start the dev server again `npm run dev` (or `nx dev nuxt-app`)

### Some Notes

If you comment out the prisma related stuff and then follow the restart instructions the nuxt server works as expected.

I'm not sure if this an issue with the prisma dependency specifically or if it's just that nuxt has problems when working with a large dependency that resides in a monorepo type setup.

I did try reproducing in a non-monorepo setting and wasn't able to create the same results. I think it could be related to the node_modules being in the root directory while nuxt is in a subdirectory. However this is all speculation on my part.

## Video Examples

- [Example with Prisma (not working)](/readme-assets/example-with-prisma.mp4)
- [Example with Prisma Commented Out (working)](/readme-assets/example-without-prisma.mp4)
