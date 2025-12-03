

# This application is designed to integrate and figma mcp server to design a figma template perfectly into functional UI using gemini-cli. 

## Following steps will be followed 
### 1- Generating token from figma
1-click profile icon
2- setting -> security tab -> Scroll to personal access token
3- Add name & check boxes 
4- click generate token
5- copy it quickly and save it (This token is needed by gemini-cli to connect with your personal figma account through figma mcp server)

### Copy any figma template
1- open any figma tempelate in web
2- Select all its components - from left to right whole , copy it
3- Click on Figma icon at top left corner & click back to files
4- Click on designs at right corner and paste on dashboard
5- Now the design has been copied 

### Setup your project environment

### Connect figma mcp server to your Gemini-cli
here are mcp servers list:
1- mcpmarket.com
2- mcp.so
3- github.com/modelcontextprotocol/servers

#### Open your separate terminal and run the following command:

gemini mcp add --transport http figma https://mcp.figma.com/mcp --header "Authorization: Bearer YOUR_TOKEN_HERE"

#### Important:
 Replace YOUR_TOKEN_HERE with the actual Figma token you copied in Step 2.

Example:
gemini mcp add --transport http figma https://mcp.figma.com/mcp --header "Authorization: Bearer figd_abc123xyz789"

## Prepare Your Figma File
### Make Your File Accessible:
1- Open your Figma design file in the browser
2- Click the Share button (top-right)
3-  settings to "Anyone with the link can view" (by Default)
4- Click Copy link
### Copy Frame Link:
1- Select the specific frame you want to convert to code
2- Right-click on the frame
3- Select "copy/paste as" -> "Copy link to selection"
4- Save this link - you'll need it in the next step

Example link format:
https://www.figma.com/design/56zJj55NsFbHA2gJNgWr/assignment-1?node-id=1-13&t=K2XK941wOcI3G-4

## Generate Code from Figma Design
### For React Components:
gemini "Get design context from [YOUR_LINK] and generate React components with Tailwind CSS"
### For Responsive Design:
gemini "Use get_design_context on [YOUR_LINK] and create mobile-responsive HTML and CSS"