import Link from "next/link";
import { useLangTerm } from "../../utils/lang";
import ownStyles from "../../styles/pages/blog.module.css";

export function BlogPost({ post, featured = false }) {
    const L_DATE_FORMAT = useLangTerm("DATE_FORMAT");
    const L_SHORT_MONTHS = useLangTerm("SHORT_MONTHS");

    function renderDate() {
        const d = new Date(post.metaData.date);
        let str = L_DATE_FORMAT;
        str = str.replace(/dd/gi, d.getDate());
        str = str.replace(/mm/gi, L_SHORT_MONTHS[d.getMonth()]);
        str = str.replace(/yy/gi, d.getFullYear());
        return str;
    }

    return (
        <div className={ownStyles.postItem + " " + (featured ? ownStyles.featuredPost : "")}>
            <div className={ownStyles.postCover}>
                {post.metaData.coverImage.path &&
                    <Link href={"blog/" + post.slug}><a>
                        <img className={ownStyles.coverImage} src={post.metaData.coverImage.path} alt={post.metaData.title} />
                    </a></Link>
                }
            </div>
            <Link href={"blog/" + post.slug}><a className={ownStyles.postData}>
                <h3>{post.metaData.title}</h3>
                <p>{post.metaData.excerpt}</p>

                <div className={ownStyles.postInfo}>
                    <img src={post.metaData.author.picture} alt={post.metaData.author.name} />
                    <div className={ownStyles.postInfoText}>
                        <div className={ownStyles.authorName}>{post.metaData.author.name}</div>
                        <time>{renderDate()}</time>
                    </div>
                </div>
            </a></Link>
        </div>
    );
}