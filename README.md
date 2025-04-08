# botspot site

This repository contains the source code for the botspot website, built with Next.js and TypeScript.

## Company Story

In 2010, inspired by a 3D printing shop in New York, German engineer Thomas Strenger set out to bring this revolutionary technology to Berlin. Starting with Germany’s first 3D printing shop in Moritzplatz, Kreuzberg, the team quickly identified a missing piece: a precise, color-true 3D scanner. Driven by their background in television, they turned to photogrammetry, debuting their first full-body scanner, BOTSCAN 01, that same year. Thus the predecessor of our NEO was born!

As interest grew—from personal 3D prints to high-quality digital avatars—the team shifted focus to advancing their scanning technology. They secured patents, developed medical and industrial applications, and earned the trust of international brands in fashion, sports, and automotive sectors. Their scanners soon became the standard for speed, precision, and scalability, making 3D digitization more accessible to a growing global market.

Today, botspot is based in Berlin’s tech hub, Adlershof, committed to creating innovative scanning solutions. Photogrammetry remains their foundation—while the sky’s the limit.

## Project Structure

The project follows a typical Next.js structure with some custom organization:

- `public/`: Static assets including images and videos.
- `src/app/`: Main application code.
  - `components/`: Reusable React components.
  - `theme/`: MUI theme customization.
  - `utils/`: Utility functions.
  - `service/`: Service layer for API calls and data fetching.
  - Various route directories (`3d-academy/`, `about/`, etc.): Each represents a route in the application.
- `.storybook/`: Storybook configuration.
- `acf.json`: Advanced Custom Fields configuration.
- `next.config.js`: Next.js configuration file.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.

## Environment Variables

Ensure you have the following environment variables set:

- `NEXT_PUBLIC_URL`: The base URL of your website.
- `NEXT_PUBLIC_EMAIL_FROM`: The email address used as the sender for automated emails.

- `SMTP_HOST`: The hostname of your SMTP server for sending emails.
- `SMTP_PORT`: The port number for your SMTP server.

For production deployment, set these environment variables in your hosting platform's configuration.

Remember to never share sensitive information like API keys, passwords, or tokens publicly.

## Contact

For any inquiries, please contact me, the developer, at [ivanmatcuka@gmail.com](ivanmatcuka@gmail.com)