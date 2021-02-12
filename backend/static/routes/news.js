const express = require('express');
const router = express.Router();

const News = require("../models/News");

router.get('/GetNews', (req, res) => {
    const promise = News.find().sort({ "newsDate": -1 });

    promise.then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json(error)
    })
})

router.post('/AddNews', (req, res) => {
    const { title, content, newsDate } = req.body

    const news = new News({
        title: title,
        content: content,
        newsDate: newsDate
    })

    const promise = news.save()

    promise.then((data) => {
        res.json({ status: true })
    }).catch((error) => {
        res.json(error)
    })
})

router.post('/UpdateNews', (req, res) => {
    const { id, title, content, newsDate } = req.body

    const promise = News.findByIdAndUpdate(id, {title: title, content: content, newsDate: newsDate})

    promise.then((data) => {
        res.json({ status: true })
    }).catch((error) => {
        res.json(error)
    })
})

router.post('/RemoveNews', (req, res) => {
    const { id } = req.body
    console.log("Remove Request.", id)

    const promise = News.findByIdAndRemove(id)

    promise.then((data) => {
        res.json({ status: true })
    }).catch((error) => {
        res.json(error)
    })
})

module.exports = router;