// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

exports.helloIiif = async(req, res) => {
  // Performs label detection on the image file
  console.log(req);
  console.log(req.body.url)
  await client
    .labelDetection(req.body.url)
    .then(results => {
      const labels = results[0].labelAnnotations;

      res.send('Labels:');
      res.send(labels.map(label => label.description));
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}
