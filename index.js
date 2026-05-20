const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Graph webhook — PROXY (not redirect)
app.use('/graph/webhook', createProxyMiddleware({
    target: 'http://104.211.103.136:8081',
    changeOrigin: true
}));

// Calendar OAuth callback
app.get('/ztva/api/calendar/callback', (req, res) => {
    const queryString = new URLSearchParams(req.query).toString();
    const azureUrl = `http://104.211.103.136:8080/ztva/api/calendar/callback?${queryString}`;
    console.log('Redirecting to:', azureUrl);
    res.redirect(azureUrl);
});

app.get('/ping', (req, res) => res.send('ok'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Proxy running');
});
