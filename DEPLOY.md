# Deployment Guide for cPanel

This guide explains how to deploy your Ball Is Life Academy landing page to a cPanel shared hosting environment.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your computer to build the project.
- **cPanel Access**: You need the login credentials for your cPanel account.

## Step 1: Build the Project

1.  Open your terminal in the project directory.
2.  Run the build command:
    ```bash
    npm run build
    ```
3.  This will create a `dist` folder in your project root containing the production-ready files.

## Step 2: Prepare for Upload

1.  Locate the `dist` folder in your project directory.
2.  **Zip the contents** of the `dist` folder (select all files inside `dist`, right-click -> Compress/Zip).
    *   *Note: Do not zip the `dist` folder itself, just the files inside it.*
    *   *Important: A `.htaccess` file was automatically included in the build (if placed in `public`). This ensures that refreshing pages on the live site works correctly.*

## Step 3: Handle Existing Files (WordPress)

If you already have WordPress files in your `public_html` folder and want to replace them with your new site:

1.  **Don't delete everything yet!** It's safer to back them up first.
2.  In **File Manager**, create a new folder named `old_wordpress_backup` (or similar).
3.  **Select all files** in `public_html` *except* `cgi-bin` and your new backup folder.
4.  **Drag and drop** (or use the "Move" option) these selected files into `old_wordpress_backup`.
5.  Now your `public_html` should be clean (except for the backup folder), ready for your new files.

## Step 4: Upload to cPanel

1.  Log in to your **cPanel**.
2.  Open **File Manager**.
3.  Navigate to your `public_html` folder.
4.  Click **Upload** in the top toolbar.
5.  Select the **ZIP file** you created in Step 2.
6.  Once uploaded, go back to File Manager.

## Step 5: Extract and Cleanup

1.  Right-click the uploaded ZIP file and select **Extract**.
2.  Extract the files to the current directory (`public_html`).
3.  Once extracted, you can **delete** the ZIP file to save space.

## Step 6: Verify

1.  Visit your website URL.
2.  Navigate through the links to ensure everything is working.
3.  Try refreshing a page other than the homepage to ensure the `.htaccess` configuration is working (no 404 errors).

## Troubleshooting

-   **404 Not Found on Refresh**: Ensure the `.htaccess` file is present in the root of your website directory (it might be hidden in File Manager; check settings to "Show Hidden Files").
-   **White Screen**: Check the browser console (F12) for errors. Often this is due to incorrect paths. Ensure your `vite.config.ts` base path is correct (usually `/` for root domains).
