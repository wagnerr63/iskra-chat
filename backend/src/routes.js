const { Router } = require('express');

const router = Router();

router.get('/',(request, response) => {
    return response.render('home.html');
});

module.exports = router;