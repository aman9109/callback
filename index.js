const express = require('express');
const app = express();

// Graph webhook
app.use('/graph/webhook', (req, res) => {
    const queryString = new URLSearchParams(req.query).toString();
    const target = `http://104.211.103.136:8081/graph/webhook${queryString ? '?' + queryString : ''}`;
    console.log('Redirecting to:', target);
    res.redirect(307, target);
});

// Calendar OAuth callback
app.get('/ztva/api/calendar/callback', (req, res) => {
    const queryString = new URLSearchParams(req.query).toString();
    const azureUrl = `http://104.211.103.136:8081/ztva/api/calendar/callback?${queryString}`;
    console.log('Redirecting to:', azureUrl);
    res.redirect(azureUrl);
});

// Keep alive ping
app.get('/ping', (req, res) => res.send('ok'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Proxy running');
});
