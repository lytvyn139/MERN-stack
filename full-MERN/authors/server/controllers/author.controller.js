console.log("✅ author.controller.js");

const Author = require("../models/author.model");

class AuthorController {
    createNewAuthor = (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json({ author: newAuthor }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    findAllAuthors = (req, res) => {
        Author.find()
            .then(allAuthors => res.json({ author: allAuthors }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    findOneSingleAuthor = (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(singleAuthor => res.json({ author: singleAuthor }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    updateExistingAuthor = (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(updatedAuthor => res.json({ author: updatedAuthor }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    deleteAnExistingAuthor = (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
}
module.exports = new AuthorController();


