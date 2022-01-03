import {getPostDataById, getSortedPostsData} from '../../lib/posts';
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import { ParsedUrlQuery } from 'querystring';
import variables from "../../styles/variables.module.scss";
import Link from "next/link";
import Date from "../../components/Date";

interface IPostProps {
    postData: any;
}
interface IParams extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
    const posts = getSortedPostsData();
    const paths = posts.map((post) => ({params: {id: post.id}}));
    return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps<IPostProps, IParams> = async (context) => {
    const postData = await getPostDataById(context?.params?.id ?? '');
    return {
        props: {
            postData
        }
    }
}

const Post: NextPage<IPostProps> = (props) => {
    const {postData} = props;
    return (
        <div>
            <h5>
                <Link href="/">
                    <a color={variables.primaryColor}>&larr;&nbsp;Back to home</a>
                </Link>
            </h5>
            <h1 color={variables.primaryColor}>{postData.title}</h1>
            <div className={variables.lightText}>
                <Date dateString={postData.date}/>
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </div>
    );
}

export default Post;
