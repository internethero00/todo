import type {Props} from "../types/types.ts";
import MyButton from "./UI/button/MyButton.tsx";
import {useNavigate} from "react-router-dom";

const PostItem = (props: {post: Props , number: number, remove: (post: Props) => void}) => {

    const router = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => router('/posts/' + props.post.id)}>
                    Open
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;