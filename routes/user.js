const express = require('express');
const router = express.Router();
const names = ['John', 'Mary', 'Bob', 'Kate', 'Mike', 'Sarah', 'David', 'Amy', 'Mark', 'Jennifer'];

router.get('/', (req, res, next) => {
    const data = [];
    for (let i = 0; i < 10; i++) {
        const name = names[Math.floor(Math.random() * names.length)]; // select a random name
        const id = Math.floor(Math.random() * (9999 - 1000) + 1000); // generate a random ID
        data.push({ id, name });
    }
    return res.status(200).json({ message: 'success', data })
});


module.exports = router;