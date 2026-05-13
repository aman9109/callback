const express = require('express');
const app = express();

app.get('/ztva/api/calendar/callback', (req, res) => {
    // Get all query params Microsoft sends
    const queryString = new URLSearchParams(req.query).toString();
    
    // Redirect to your Azure HTTP backend
    const azureUrl = `http://YOUR-AZURE-IP:8080/ztva/api/calendar/callback?${queryString}`;
    
    console.log('Redirecting to:', azureUrl);
    res.redirect(azureUrl);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Proxy running');
});
