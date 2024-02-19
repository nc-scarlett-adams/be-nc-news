const { selectAllTopics } = require("../models/topic.model");

exports.getAllTopics = (req, res) => {
  selectAllTopics().then((topics) => {
    res.status(200).send({ topics });
  });
};
