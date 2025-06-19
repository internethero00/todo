import {useEffect, useState} from 'react';
import './styles/App.css';
import PostsList from "./components/PostsList.tsx";
import type {Props} from "./types/types.ts";
import PostForm from "./components/PostForm.tsx";
import PostFilter from "./components/PostFilter.tsx";
import MyModal from "./components/UI/MyModal/MyModal.tsx";
import MyButton from "./components/UI/button/MyButton.tsx";
import {usePosts} from "./hooks/usePosts.ts";
import axios from "axios";

const App = () => {
    const [posts, setPosts] = useState<Props[]>([]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts()
    }, []);

    async function fetchPosts() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(response.data);
    }

    const createPost = (newPost: Props) => {
        setPosts([...posts, newPost]);
        setModal(false);

    }
    const removePost = (myPost: Props) => {
        setPosts(posts.filter((post) => post.id !== myPost.id));
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>
                To Make Posts
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px"}}/>
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts List"}/>
        </div>
    );
};

export default App;