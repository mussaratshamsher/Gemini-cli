---
title: Chapter 5 – Publishing Your First AI Book
---

# Chapter 5 – Publishing Your First AI Book

Congratulations on finishing your AI book! Now, let's get it online for the world to see. This chapter guides you through previewing, building, and deploying your Docusaurus-powered AI book.

## Running the Docusaurus preview server

Before deploying, it's crucial to preview your book locally to ensure everything looks and functions as expected. Docusaurus provides a development server that hot-reloads changes, making the review process efficient.

To start the preview server, navigate to your book's root directory in the terminal and run:

```bash
npm start
```

This command typically opens your browser to `http://localhost:3000` (or another available port), displaying your book. Review all chapters, check navigation, and verify that all content renders correctly.

## Building a static website

Once you're satisfied with the local preview, you need to build the static assets of your Docusaurus site. This process compiles all your Markdown files, React components, and styles into a set of static HTML, CSS, and JavaScript files that can be hosted on any web server.

To build your site, run the following command in your book's root directory:

```bash
npm run build
```

This command generates a `build` directory (or `docs` if configured otherwise) in your project root, containing all the static files ready for deployment.

## Choosing a deployment platform

There are many platforms available for hosting static websites. For a Docusaurus site, popular choices include GitHub Pages and Vercel due to their ease of integration and cost-effectiveness.

### GitHub Pages (recommended)

GitHub Pages is an excellent option for hosting project documentation directly from a GitHub repository. It's free, integrates seamlessly with Git workflows, and is ideal for open-source projects or personal documentation.

To deploy to GitHub Pages:
1.  **Ensure your `docusaurus.config.ts` is configured correctly.** Specifically, set `baseUrl` and `projectName`.
2.  **Use the Docusaurus deployment script.** You can typically deploy by running:
    ```bash
    GIT_USER=<YOUR_GITHUB_USERNAME> USE_SSH=true npm run deploy
    ```
    Replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub username. This command builds your site and pushes the `build` directory content to a `gh-pages` branch on your repository. GitHub Pages will then serve your site from this branch.

### Vercel (optional)

Vercel is another powerful platform known for its fast deployments and seamless integration with front-end frameworks. It's a great choice if you prefer a more streamlined deployment experience with continuous integration.

To deploy to Vercel:
1.  **Install Vercel CLI:** `npm install -g vercel`
2.  **Log in:** `vercel login`
3.  **Deploy:** Navigate to your project directory and run `vercel`. Follow the prompts to link your project and deploy. Vercel automatically detects Docusaurus and configures the build settings.

## Going live your online AI book

After choosing your platform and deploying, your AI book should be accessible online!

-   **For GitHub Pages:** Your book will typically be available at `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`.
-   **For Vercel:** You'll be provided with a unique URL, and you can configure a custom domain if desired.

Share your knowledge with the world and celebrate your accomplishment!
