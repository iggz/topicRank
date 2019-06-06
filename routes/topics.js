const express = require('express');
const router = express.Router();
const topicsModel = require('../models/topics')

router.get('/', async (req, res, next) => {
    const allTopics = await topicsModel.getAll();
    console.log(allTopics);
    
    res.render('template', {
        locals: {
            title: 'Assignment Topics',
            topicsList: allTopics
        },
        partials: {
            partial: 'topics-partial'
        }
    });
});

router.post('/', (req,res) => {
    const { topic, rank } = req.body;
    
    
    topicsModel.add(topic, rank)
    .catch((err) => {
        res.sendStatus(500).send(err.message);
    });
});

module.exports = router;