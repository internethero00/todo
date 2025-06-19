import PostItem from "./PostItem.tsx";
import type {Props} from "../types/types.ts";


type Posts = {
    posts: Props[];
    title: string;
    remove: (post: Props) => void;
}

const PostsList = ({posts, title, remove} : Posts) => {
    console.log(posts);
    if (!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>
                No posts found.
            </h1>
        );
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post: Props, index) => (
                <PostItem remove = {remove} number={index + 1} post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostsList;