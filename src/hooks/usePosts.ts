import {useMemo} from "react";
import type {Props} from "../types/types.ts";

export const useSortedPosts = (posts: Props[], sort: string) => {
    const sortedPosts = useMemo(() => {
        console.log("sorted Func started")
        if (sort) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return [...posts].sort((a: Props, b:Props) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [sort, posts]);
    return sortedPosts;
}

export const usePosts = (posts: Props[], sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);
    return sortedAndSearchedPosts;
}