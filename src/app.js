import express from 'express';
const app = express();
import dotenv from 'dotenv';
import registration from './registration.js'
// Þetta verður aðgengilegt gegnum `local.bar` í template
app.locals.importantize = str => `${str}!`;
const viewsPath = new URL('./views', import.meta.url).pathname;
app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/',registration);
dotenv.config();

const {
  PORT: port = 3000,
} = process.env;



// TODO setja upp rest af virkni!

// Verðum að setja bara *port* svo virki á heroku
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
