---
title: Chapter 2 – Setting Up the Environment
---

# Chapter 2 – Setting Up the Environment

This chapter guides you through setting up your development environment for building AI agents with Docusaurus and Gemini. A well-configured environment is crucial for a smooth development workflow.

## Required tools overview

Before you begin, ensure you have the following essential tools installed on your system.

-   **Node.js**: As Docusaurus is built on React, Node.js is required to run and build your documentation site.
    *   **Installation:** Download the latest LTS (Long Term Support) version from the official [Node.js website](https://nodejs.org/). Follow the installation instructions for your operating system.
    *   **Verification:** Open your terminal or command prompt and run `node -v` and `npm -v` to confirm successful installation.

-   **Python**: Python is a primary language for AI development and will be used for developing your AI agents, handling data, and integrating with various AI libraries.
    *   **Installation:** Download Python from the official [Python website](https://www.python.org/downloads/). It's often recommended to use a version manager like `pyenv` or `conda` for managing multiple Python versions, especially in larger projects.
    *   **Verification:** Open your terminal and run `python --version` to check the installed version.

-   **Git**: Git is an indispensable version control system that allows you to track changes in your codebase, collaborate with others, and manage different versions of your project.
    *   **Installation:** Download Git from the official [Git website](https://git-scm.com/downloads).
    *   **Verification:** Open your terminal and run `git --version` to confirm installation.

## Installing Docusaurus

Docusaurus is a powerful static site generator that helps you build beautiful documentation websites with ease. Here's how to set up a new Docusaurus project.

1.  **Create a New Docusaurus Site:**
    Open your terminal and run the following command. Replace `my-ai-book` with your desired project name.
    ```bash
    npx create-docusaurus@latest my-ai-book classic
    ```
    This command creates a new Docusaurus project with a classic template.

2.  **Navigate to Your Project:**
    Change your directory into the newly created project folder:
    ```bash
    cd my-ai-book
    ```

3.  **Start the Development Server:**
    To see your Docusaurus site in action, run the development server:
    ```bash
    npm run start
    ```
    This will open your site in your web browser, usually at `http://localhost:3000`.

## Installing and configuring Gemini CLI

The Gemini CLI is a command-line interface tool that allows you to interact with Google's Gemini models directly from your terminal. It's essential for testing and deploying your AI agents.

1.  **Installation:**
    *(Please replace this with the actual installation command for your specific Gemini CLI. If it's a standard npm package, it might be similar to `npm install -g @google/gemini-cli`)*
    ```bash
    # Example: npm install -g @google/gemini-cli
    # Use the specific command for your Gemini CLI here.
    ```

2.  **Configuration:**
    After installation, you'll typically need to configure the CLI with your Google Cloud credentials or an API key. This step ensures that the CLI can securely authenticate and communicate with the Gemini API.
    *(Refer to your Gemini CLI documentation for precise configuration steps. A common approach involves running a command like `gemini configure` or setting environment variables.)*
    ```bash
    # Example: gemini configure
    # Use the specific configuration command for your Gemini CLI here.
    ```

## Recommended project folder structure

A well-organized project structure enhances readability, maintainability, and collaboration. For an AI book project focusing on agents, we recommend the following structure within your Docusaurus site:

```
my-ai-book/
├── docs/             # Docusaurus markdown files for book chapters
├── src/              # Docusaurus React components, pages, CSS
├── static/           # Static assets like images, favicon
├── agents/           # Directory for your AI agent code (e.g., Python scripts, JS modules)
│   ├── chapter-x-agent/ # Specific agent implementation for a chapter
│   └── shared_modules/  # Reusable agent components or utilities
├── data/             # Data used by your agents (e.g., datasets, memory stores)
├── tools/            # Definitions and implementations of custom tools for your agents
├── .docusaurus/      # Docusaurus build artifacts (ignore)
├── node_modules/     # Node.js dependencies (ignore)
├── package.json      # Node.js project metadata
├── docusaurus.config.ts # Docusaurus configuration
└── ...               # Other Docusaurus files
```
This structure clearly separates your book content from your agent's code and related assets.

## Common setup issues and solutions

Encountering issues during setup is normal. Here are some common problems and their typical solutions:

-   **"Command not found" for Node.js, Python, or Git:**
    *   **Solution:** Ensure the tool is correctly installed and its executable path is added to your system's `PATH` environment variable. Restart your terminal after installation.

-   **Node.js Version Incompatibility:**
    *   **Issue:** Docusaurus might require a specific Node.js version.
    *   **Solution:** Use a Node.js version manager (like `nvm` or `fnm`) to install and switch to the required Node.js version.

-   **Python Dependency Errors:**
    *   **Issue:** Your agent's Python code might fail due to missing libraries.
    *   **Solution:** Navigate to your agent's directory and install dependencies using `pip install -r requirements.txt` (if you have a `requirements.txt` file) or `pip install <package-name>`.

-   **Network or Proxy Issues:**
    *   **Issue:** Problems downloading packages via `npm` or `pip`.
    *   **Solution:** Check your internet connection. If you are behind a corporate proxy, configure proxy settings for `npm` and `pip` or your system's environment variables.

-   **Docusaurus Build Errors:**
    *   **Issue:** Unexpected errors when running `npm run build` or `npm run start`.
    *   **Solution:** Try deleting `node_modules` and `package-lock.json` (or `yarn.lock`), then run `npm install` again. Clear the Docusaurus cache with `npm run clear`.

This chapter provides a solid foundation for your AI agent development journey. In the next chapters, we will dive into building and deploying your agents.