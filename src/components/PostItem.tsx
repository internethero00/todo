import type {Props} from "../types/types.ts";
import MyButton from "./UI/button/MyButton.tsx";

const PostItem = (props: {post: Props , number: number, remove: (post: Props) => void}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;