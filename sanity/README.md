Sanity CMS setup

1. Install the Sanity CLI (on your machine):

\\\ash
npm install -g @sanity/cli
\\\

2. Create a project folder for the CMS and run:

\\\ash
sanity init --dataset production
\\\

3. Add the schemas from this repo (\sanity/schemas/*.js\) into your Sanity studio \schemas\ folder.

4. Deploy the Sanity studio and note the project ID and dataset. Add those values to your Next.js app as \SANITY_PROJECT_ID\ and \SANITY_DATASET\.

5. In Next.js, use \@sanity/client\ to fetch content from Sanity and populate pages.

Notes
- For quick MVP you can use the included placeholder products and manually add content later in Sanity.
