const express = require('express')
// const jwt = require('jsonwebtoken')
const Admin = require('../adminModels/AdminModel')

const AdminControllers = {
    Checkin: async (req, res) => {
        try {
            const password = req.body
            //check field
            if (!password) return res.status(400).json({ msg: 'Please type the password' })
            //check password
            if (password !== Admin.password) return res.status(404).json({ msg: 'please type the right password' })
            //allow to Enter AdminDashboard
            if (password === Admin.password) return res.status(200).json({ msg: 'Hello Mr. Safa.' })

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = AdminControllers;