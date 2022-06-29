import Post from '../models/Post.js'

export const getPosts = async (req, res) => {
    const posts = await Post.find()
    return res.json({ posts })
}

export const createPost = async (req, res) => {
    const { title, description } = req.body

    const post = new Post({ title, description })

    const newPost = await post.save()

    return res.send({
        newPost
    })
}
export const updatePost = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send({
        post
    })
}
export const deletePost = async (req, res) => {
    const postRemoved = await Post.findByIdAndDelete(req.params.id)
    if (!postRemoved) return res.sendStatus(404)

    return res.sendStatus(204)
}
export const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) return res.sendStatus(404)

    return res.send({
        post
    })
}