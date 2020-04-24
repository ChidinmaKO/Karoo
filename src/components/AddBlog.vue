<template>
    <div id="add-blog">
        <h3>Add a New Blog Post</h3>

        <form action="">
            <label for="title">Blog Title</label>
            <input 
                type="text" 
                id="title" 
                required
                v-model.lazy="blog.title"
            >
            <label for="content">Blog Content</label>
            <textarea id="content" v-model.lazy="blog.content"></textarea>

            <div id="checkboxes">
                <label for="fashion">Fashion</label>
                <input type="checkbox" id="fashion" value="fashion" v-model="blog.categories">

                <label for="sports">Sports</label>
                <input type="checkbox" id="sports" value="sports" v-model="blog.categories">

                <label for="entertainment">Entertainment</label>
                <input type="checkbox" id="entertainment" value="entertainment" v-model="blog.categories">

                <label for="science">Science</label>
                <input type="checkbox" id="science" value="science" v-model="blog.categories">

                <label for="education">Education</label>
                <input type="checkbox" id="education" value="education" v-model="blog.categories">
            </div>

            <div>
                <label for="author">Author</label>
                <select id="author" v-model="blog.author">
                    <option v-for="(author, index) in authors" :key="`author[1]-${index}`">{{ author }}</option>
                </select>

            </div>
        </form>

        <div id="preview">
            <h4>Preview Blog</h4>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content: </p>
            <p>{{ blog.content }}</p>
            <p>Blog categories: </p>
            <ul>
                <li v-for="(category, index) in blog.categories" :key="`category[1]-${index}`">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
    </div>
  
</template>

<script>
  export default {
    name: 'addBlog',
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['Jason Karoo', 'Tyler Lee', 'Erik Tom']
        }
    },
    methods: {},
  }
</script>

<style>
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    #checkboxes label{
        display: inline-block;
    }

</style>
