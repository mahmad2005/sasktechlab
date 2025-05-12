// server.js
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080; // Azure App Service typically sets PORT

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// THE CATCHALL HANDLER:
// This middleware will be reached if no static file was found
// AND no previous app.get route matched.
// It sends back React's index.html file for SPA routing.
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});