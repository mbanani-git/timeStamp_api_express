var moment = require("moment"); // require
moment().format();

const sendUnix = (req, res) => {
  try {
    const { time } = req.params;
    let t = moment("05 October 2011");
    if (time.includes("-") || time.includes(" ")) {
      if (moment(time).isValid()) {
        let utc = moment.utc(time).format("ddd, DD MMM YYYY HH:mm:ss") + " GMT";
        let unix = Number(moment.utc(time).format("x"));

        return res.status(201).json({ unix, utc });
      }
      return res.status(401).json({ error: "Invalid Date" });
    } else {
      if (moment(Number(time)).isValid()) {
        let utc = moment.utc(Number(time)).format("ddd, DD MMM YYYY HH:mm:ss") + " GMT";
        let unix = Number(moment.utc(Number(time)).format("x"));

        return res.status(201).json({ unix, utc });
      }
      return res.status(401).json({ error: "Invalid Date" });
    }
  } catch (error) {
    console.log(error);
  }
};
const emptyDate = (req, res) => {
  try {
    let time = new Date();
    let utc = moment.utc(time).format("ddd, DD MMM YYYY HH:mm:ss") + " GMT";
    let unix = Number(moment.utc(Number(time)).format("x"));
    return res.status(201).json({ unix, utc });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { sendUnix, emptyDate };
