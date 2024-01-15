import express from 'express'
import mongoose, { Schema } from 'mongoose'
import cors from 'cors'
const app = express()
const port = 9000
app.use(express.json())
app.use(cors())

const productSchema = new Schema({
    img: String,
    name: String,
    category: String,
    price: Number
});

const ProductModel = mongoose.model('product', productSchema);


app.get('/', async (req, res) => {
    try {
        const product = await ProductModel.find({})
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product = await ProductModel.findById(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/', async (req, res) => {
    try {
        const {name, img , category , price} = req.body
        const product = new ProductModel({name, img , category , price} )
        await product.save()
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {name, img , category , price} = req.body
        const product = await ProductModel.findByIdAndUpdate(id,{name, img , category , price} )
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product = await ProductModel.findByIdAndDelete(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})


mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected !'))
    .catch(() => console.log('Not Connected !'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})