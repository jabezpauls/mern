const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const ProductModel = require('./product')

const app = express()

// Middleware
app.use(cors()) // Allow cross-origin requests
app.use(express.json()) // Parse JSON request body

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Company')
  .then(() => console.log('✅ DB connected'))
  .catch(err => console.log('❌ DB connection error:', err))

// ==================== CREATE ====================
app.post('/products', async (req, res) => {
  try {
    const product = await ProductModel.create(req.body)
    res.status(201).json({ message: '✅ Product Created Successfully', product })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// ==================== READ ====================
app.get('/products', async (req, res) => {
  try {
    const products = await ProductModel.find()
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ==================== UPDATE ====================
app.put('/products/:id', async (req, res) => {
  const { id } = req.params
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true })
    if (!updatedProduct) return res.status(404).json({ message: '❌ Product Not Found' })
    res.status(200).json({ message: '✅ Product Updated Successfully', updatedProduct })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// ==================== DELETE ====================
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(id)
    if (!deletedProduct) return res.status(404).json({ message: '❌ Product Not Found' })
    res.status(200).json({ message: '✅ Product Deleted Successfully', deletedProduct })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// Start Server
const PORT = 8000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
