const express = require('express');
const app = express();
app.get('/ztva/api/calendar/callback', (req, res) => {
    const queryString = new URLSearchParams(req.query).toString();
    const azureUrl = http://104.211.103.136:8080/ztva/api/calendar/callback?${queryString};
    console.log('Redirecting to:', azureUrl);
    res.redirect(azureUrl);
});
app.listen(process.env.PORT || 3000, () => {
    console.log('Proxy running');
});
