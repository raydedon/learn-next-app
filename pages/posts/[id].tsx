import {getPostDataById, getSortedPostsData} from '../../lib/posts';
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import { ParsedUrlQuery } from 'querystring';
import variables from "../../styles/variables.module.scss";
import Link from "next/link";
import Date from "../../components/Date";
import {GetServerSideProps} from "next/types";

interface IPostProps {
    postData: any;
}
interface IParams extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
    console.info('inside Post component. inside getStaticPaths function');
    const posts = getSortedPostsData();
    const paths = posts.map((post) => ({params: {id: post.id}}));
    return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps<IPostProps, IParams> = async (context) => {
    console.info('inside Post component. inside getStaticProps function');
    const postData = await getPostDataById(context?.params?.id ?? '');
    return {
        props: {
            postData
        }
    }
}


export const getServerSideProps: GetServerSideProps<IPostProps, IParams> = async (context) => {
    console.info('inside Post component. inside getServerSideProps function');
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
