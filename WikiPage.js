import React from "react";
import { Link } from "react-router";
import Head from "react-helmet";
import {
    createContainer,
    query,
    BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

export const WikiPage = ({ isLoading, page }) => (
    <div>
        {isLoading && "Loading..."}
        {!isLoading &&
        page.node && (
            <div>
                <header>
                    <p>
                        [<Link to="/">Back to Home</Link>]
                        [<Link to={`mailto:serbanghita@gmail.com?subject=${page.node.title}`}>Feedback</Link>]
                        [<Link to={``}>Suggest edit</Link>]
                    </p>
                    <hr />
                </header>
                <article>
                    <Head>
                        <title>{page.node.title}</title>
                        <meta name="description" content={page.node.description} />
                        <link type="text/css" href="/site.css" rel="stylesheet" />
                    </Head>

                    <h1>{page.node.title}</h1>
                    <p>
                        &#9997; Authored by Serban Ghita<br />
                        &#9749; Written on {page.node.date}
                    </p>
                    <BodyRenderer>{page.node.body}</BodyRenderer>
                </article>
            </div>
        )}
        <footer>
            <p>[<Link to="/">Back to Home</Link>]</p>
        </footer>
    </div>
);

export const WikiPageContainer = createContainer(WikiPage, props => ({
    page: query({ path: "wiki", id: props.params.splat })
}));