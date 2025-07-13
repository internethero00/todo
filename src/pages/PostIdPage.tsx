import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching.ts";
import PostService from "../API/PostService.ts";
import Loader from "../components/UI/Loader/Loader.tsx";

const PostIdPage = () => {
    const params = useParams();
    console.log(params);
    const [post, setPost] = useState<{ id: number, title: string }>({id: 0, title: ""});
    const [comments, setcomment] = useState<{email: string, body: string}[]>([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(Number(id))
        console.log(response)
        setPost(response.data)
    })
    const [fetchComment, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(Number(id))
        console.log(response)
        setcomment(response.data)
    })
    useEffect(() => {
        fetchPostById(Number(params.id))
        fetchComment(Number(params.id))
    }, [])
    return (
        <div>
            <h1>Post with id = {params.id}</h1>
            {isLoading ? (
                    <Loader/>
                ) :
                <div>
                    <div>{post.id}. {post.title}</div>
                    <h1>Comments:</h1>
                    {isComLoading ? (
                        <Loader/>
                        ) : <div>{comments.map(comm =>
                        <div key={new Date().getDay()} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                    </div>}

                </div>

            }


        </div>
    );
};

export default PostIdPage;