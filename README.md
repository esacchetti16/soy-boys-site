# Soy Boys â€” Website

This repository contains a Next.js starter site for Soy Boys (plant-based food company).

Quick start

1. Install deps:

\\\ash
npm install
\\\

2. Run locally:

\\\ash
npm run dev
\\\

Sanity CMS

- This repo includes Sanity schema templates in \/sanity\ to create a Sanity project and CMS for editing products, locations, and content. See \/sanity/README.md\ for setup steps.

Git & Deploy

Recommended repo name: \soy-boys-site\

Create a GitHub repo (example commands):

\\\ash
git init
git add .
git commit -m "Initial site scaffold"
git branch -M main
git remote add origin https://github.com/esacchetti16/soy-boys-site.git
git push -u origin main
\\\

Deploy to Vercel:

- Go to https://vercel.com and import the GitHub repo. Vercel will detect Next.js automatically.
- Set the environment variables \SANITY_PROJECT_ID\ and \SANITY_DATASET\ in Vercel if you create a Sanity project.

DNS / Squarespace

- After Vercel deploys, add your custom domain \soyboyskitchen.com\ in Vercel. Vercel will show the required DNS records (A / ALIAS or CNAME).
- In Squarespace DNS settings, replace any existing A/CNAME records for the apex and \www\ with the records Vercel provides.

