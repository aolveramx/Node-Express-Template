// General dependencies
const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
// Connect DB Config
const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Connect to DB
connectDB()

// Init app
const app = express()

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.get('/')

// Init Server
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  server.close(() => process.exit(1))
})
