const path = require('path')
const express = require('express')
const mongoose  = require('mongoose');
const app = express()
const ejs=require("ejs")
const PORT =  /* Math.floor(Math.random() * 100) +  */3000;


mongoose.connect(`mongodb://0.0.0.0:27017`
).then(()=> console.log("database connected")) .catch((e)=>console.log(`error ${e}`))

app.set('view engine','ejs')

const AuthRouter=require("./routes/auth")

const productsRouter=require("./routes/Products")

const UsersRouter=require("./routes/Users")

const ResumesRouter=require("./routes/Resumes")

const ContactusRouter=require("./routes/Contactus")

const CategoriesRouter=require("./routes/Categories")

const CartRouter=require("./routes/Cart")

const BillingsRouter=require("./routes/Billings")




app.use(express.static('views'));
app.use(express.static('Assets'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//custom middleware (Application-level middleware)
// logging
// app.use((req, res,next) => {})
// app.use(logging)

/* api  */
// app.use('/api',AuthRouter)
app.use('/Products',productsRouter)

app.use('/Users',UsersRouter)

app.use('/Resumes',ResumesRouter)
app.use('/Contactus',ContactusRouter)

app.use('/Categories',CategoriesRouter)

app.use('/Cart',CartRouter)

app.use('/Billings',BillingsRouter)

app.use('/Accounts',AuthRouter)

// app.use('/',(req, res) => res.render('index'))
const Product=require("./models/ProductModelDB")
const productsController = require('./controllers/ProductsControllerDB');

app.get('/', async (req,res)=>{
  let products =await Product.find()
  res.render('index', { title: 'Home',products });
  //             async (req, res) => {
  // let products1 = await Product.find().limit(4);
  // if (products1)
  //   res.render('index', { title: 'Home',products1 });
  // else
  //   res.render('index', { title: 'Home',products1:[]  });
});


app.get('/aboutus', (req, res) => {
  res.render('aboutus', { title: 'About Us' });
});

app.get('/index',async (req, res) => {
  let products =await Product.find()
  res.render('index', { title: 'Home',products });
});

app.get('/bags', async (req, res) => {
  let products =await Product.find()
  res.render('bags', { title: 'Bags' ,products});
});

app.get('/careers', (req, res) => {
  res.render('careers', { title: 'Careers' });
});

app.get('/checkout', (req, res) => {
  res.render('checkout', { title: 'Checkout' });
});

app.get('/contact', (req, res) => {
  res.render('contactus', { title: 'Contact Us' });
});

app.get('/kids',async (req, res) => {
  let products =await Product.find()
  res.render('kids', { title: 'Kids',products });
});


app.get('/men',async (req, res) => {
  let products =await Product.find()

  res.render('men', { title: 'Men' ,products});
});

app.get('/myaccount', (req, res) => {
  res.render('myaccount', { title: 'My Account' });
});

//to get the product name requested
app.get('/product/:productName',async (req, res,next) => {
  const productName = req.params.productName;
  let products =await Product.find()
  res.render('product', { title: 'Product',productName,products });
});


app.get('/shoes',async (req, res) => {
  let products =await Product.find()

  res.render('shoes', { title: 'Shoes',products });
});

app.get('/women', async(req, res) => {
  let products =await Product.find()
  res.render('women', { title: 'Women' ,products});
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.post('/myaccount',(req,res)=>{
console.log(req.body);
});

app.post('/contactus',(req,res)=>{
  console.log(req.body);
  });

app.post('/Resumes',(req,res)=>{
  console.log(req.body);
  });

  app.post('/checkout',(req,res)=>{
    console.log(req.body);
    });

// app.use('*', express.static('views'));
app.get('*', (req, res) => {
  res.status(404).render('404', { title: '404' });
  })


app.listen(PORT, () => console.log(`listening on port ${PORT}!`))