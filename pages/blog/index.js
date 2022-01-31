import AppLayout from "../../components/app/AppLayout";
import AppHead from "../../components/app/AppHead";
import BlogPostItem from "../../components/app/BlogPostItem";
import axios from "axios";
import { SITE_TITLE } from "../../data/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLangTerm } from "../../utils/lang";
import styles from "../../styles/pages/common.module.css";
import ownStyles from "../../styles/pages/blog.module.css";

export default function Blog() {
    const { locale, query } = useRouter();
    const L_NAV_BLOG = useLangTerm("NAV_BLOG");
    const L_BLOG_INTRO = useLangTerm("BLOG_INTRO");
    const L_BLOG_NO_ARTICLES = useLangTerm("BLOG_NO_ARTICLES");

    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        if (locale) {
            try {
                const { category } = query;
                const response = await axios.post(`api/post/`, { locale, category });
                setPosts(response.data.posts);
            } catch (err) {
                console.error(err);
                setPosts([]);
            }
        }
    }, [locale, query]);

    return (
        <AppLayout className={styles.container}>
            <AppHead title={`${SITE_TITLE} - ${L_NAV_BLOG}`} />

            <h1>{L_NAV_BLOG}</h1>

            {L_BLOG_INTRO}

            <section className={ownStyles.postListContainer}>
                {posts.length > 0 ?
                    <div className={ownStyles.postList}>
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} featured={index == 0} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} />;
                        })}
                    </div>
                    :
                    <p>{L_BLOG_NO_ARTICLES}</p>
                }
            </section>

        </AppLayout>
    );
}