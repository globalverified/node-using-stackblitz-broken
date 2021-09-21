import express from 'express';
// import fs from 'fs';
// import Path from 'path';
import checkFileExists from '../utils/helper';

// Path of data directory
// const DATA_DIR = Path.join(__dirname, '../data');

const router = express.Router();

/**
 * Route to save data in a json file.
 * @param req {Object}
 * @param res {Object}
 */
router.post('/save/:id', (req, res) => {
  const { id } = req.params;

  // Checking directory is exists or not, if not then creating the directory
  // if (!fs.existsSync(DATA_DIR)) {
  // fs.mkdirSync(DATA_DIR);
  // }

  /**
   * Writing the data in the json file which is coming in request body.
   * Creating a json file based on id.
   **/
  // fs.writeFile(`${DATA_DIR}/${id}.json`, JSON.stringify(req.body), (err) => {
  //   if (err) throw err;
  //   res.send({ message: 'The file has been saved!' });
  // });
});

/**
 * Route to get the json data from data folder base on id.
 * @param req {Object}
 * @param res {Object}
 */
router.get('/:id', async (req, res) => {
  // Extracting id from request param object
  const { id } = req.params;

  // const path = Path.join(DATA_DIR, `${id}.json`);

  // Checking request id json data exists or not.
  // const fileExists = await checkFileExists(path);

  if (!fileExists)
    return res.send({ message: `No data found for given id ${id}` });

  // const data = fs.readFileSync(path);
  // return res.send(JSON.parse(data.toString()));
});

/**
 * Entry route
 * @param req {Object}
 * @param res {Object}
 */
router.get('/', function (req, res) {
  res.send(
    `
      <h1>REST API</h1>
      To test API, please hit the below url from postman.
      https://fodye.sse.codesandbox.io/save/1
    `
  );
});

export default router;
