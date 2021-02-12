const express = require('express');
const router = express.Router();

const Notices = require("../models/Notices");

router.get('/GetNotices', (req, res) => {
    const promise = Notices.find().sort({ "noticesDate": -1 });

    promise.then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json(error)
    })
})

router.post('/AddNotices', (req, res) => {
    const { title, content, noticesDate } = req.body

    const notice = new Notices({
        title: title,
        content: content,
        noticesDate: noticesDate
    })

    const promise = notice.save()

    promise.then((data) => {
        res.json({ status: true })
    }).catch((error) => {
        res.json(error)
    })
})

router.post('/UpdateNotices', (req, res) => {
    const { id, title, content, noticesDate } = req.body

    const promise = Notices.findByIdAndUpdate(id, {title: title, content: content, noticesDate: noticesDate})

    promise.then((data) => {
        res.json({ status: true })
    }).catch((error) => {
        res.json(error)
    })
})

router.post('/RemoveNotices', (req, res) => {
    const { id } = req.body

    const promise = Notices.findByIdAndRemove(id)

    promise.then((data) => {
        res.json({ status: true })
    }).catch((error) => {
        res.json(error)
    })
})

module.exports = router;