import React from "react";
import { Link } from "react-router";
import Head from "react-helmet";
import {
    createContainer,
    query
} from "@phenomic/preset-react-app/lib/client";


export const WikiPagesList = ({ isLoading, posts }) => (
    <div>
        {isLoading && "Loading..."}
        {!isLoading && (
            <ul>
                {posts &&
                posts.node &&
                posts.node.list &&
                posts.node.list.map(post => (
                    <li key={post.id}>
                        <Link to={`/wiki/${post.id}/`}>{post.title || post.id}</Link> ({new Date(post.date).getFullYear()})
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export const WikiPagesListContainer = createContainer(WikiPagesList, () => ({
    posts: query({ path: "wiki" })
}));

export const ReviewPagesList = ({ isLoading, posts }) => (
    <div>
        {isLoading && "Loading..."}
        {!isLoading && (
            <ul>
                {posts &&
                posts.node &&
                posts.node.list &&
                posts.node.list.map(post => (
                    <li key={post.id}>
                        <Link to={`/review/${post.id}/`}>{post.title || post.id}</Link> ({new Date(post.date).getFullYear()})
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export const ReviewPagesListContainer = createContainer(ReviewPagesList, () => ({
    posts: query({ path: "review" })
}));

export const Home = () => (
    <div>
        <Head>
            <title>Serban Ghita</title>
            <meta name="description" content="Welcome to my personal space." />
            <link type="text/css" href="/site.css" rel="stylesheet" />
        </Head>

        <p>Hello! All content on this website is written by Serban Ghita who lives and works in Bucharest, Romania
            while building diverse software solutions. <a href="http://github.com/serbanghita">Follow me on Github</a></p>
        <p>Thoughts on software</p>
        <WikiPagesListContainer/>
        <p>Various reviews</p>
        <ReviewPagesListContainer/>
        <hr />
        <p>
            If you've found anything useful on my website drop me a line and let me know.<br />
            Email: serbanghita [at] gmail [dot] com
        </p>
    </div>
);
