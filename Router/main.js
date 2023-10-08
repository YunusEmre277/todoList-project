const express = require("express");
const router = express.Router();
const todo = require("../data/todoData.js")
router.get("/", async(req,res) => {
    const yunus = await todo.find()
    console.log(yunus._id)
    res.render("../views/index.ejs", {data: yunus, db: todo});
}) 
.post("/", async(req,res) => {

    const { title, desc } = req.body;
    if(!title || !desc) throw new TypeError(`Sanırım başlık ve açıklamayı girmemişsin! gir.`);

    const todoList = new todo({
        title: title,
        description:desc
    });

    await todoList.save().then(() => {
        res.redirect("/");
    }).catch((err) => {
        return console.error(`Bir hata oluştu ve toDo list yapmadım. | ${err}`);
    });
});
router.get("/:id/delete", async(req,res) => {
    const yunuss = await todo.find();
    const { id } = req.params;

    await todo.deleteOne({_id:id})

    return res.redirect("/")

})
module.exports = router;

