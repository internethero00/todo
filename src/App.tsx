import {useEffect, useState} from 'react';
import './styles/App.css';
import PostsList from "./components/PostsList.tsx";
import type {Props} from "./types/types.ts";
import PostForm from "./components/PostForm.tsx";
import PostFilter from "./components/PostFilter.tsx";
import MyModal from "./components/UI/MyModal/MyModal.tsx";
import MyButton from "./components/UI/button/MyButton.tsx";
import {usePosts} from "./hooks/usePosts.ts";
import PostService from "./API/PostService.ts";
import Loader from "./components/UI/Loader/Loader.tsx";
import {useFetching} from "./hooks/useFetching.ts";
import {getPageCount, getPagesArray} from "./utils/pages.ts";

const App = () => {
    const [posts, setPosts] = useState<Props[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const pagesArray = getPagesArray(totalPages)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    const changePage = (page: number) => {
        setPage(page);

    }



    useEffect(() => {
        fetchPosts()
    }, [page]);

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
            {postError && <h1 style={{display: 'flex', justifyContent: 'center'}}>ERROR ${postError}</h1>}
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                :
            <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts List"}/>
            }
            <div className="page__wrapper">
                {pagesArray.map((p) => (
                    <span key={p}
                          onClick={() => changePage(p)}
                          className={page === p ? 'page page__current' : 'page'}>{p}</span>
                ))}
            </div>
        </div>
    );
};

export default App;