const mongoose = require(mongoose)

const UserSchema = new mongoose.Schema({
    id: Object,
    type: Text,
    anagramType: Text,
    blocks: Array,
    SiblingId: Object,
    solution: Text,
    title: String,
})

const UserModel = mongoose.model("ques", UserSchema)
module.exports = UserModel