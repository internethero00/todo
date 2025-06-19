import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput.tsx";
import MyButton from "./UI/button/MyButton.tsx";
import type {Props} from "../types/types.ts";

type Prop = {
    create: (newPost: Props) => void;
};

const PostForm: React.FC<Prop> = ({create}) => {

    const [post, setPost] = useState({title: "", body: "",});

    const addNewPost = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost);
        setPost({title: "", body: "",});


    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
                type={"text"}
                placeholder={"Post's name"}/>
            <MyInput
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
                type={"text"}
                placeholder={"Post's description"}/>
            <MyButton onClick={addNewPost}>Make post</MyButton>
        </form>
    );
};

export default PostForm;