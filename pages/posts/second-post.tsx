import Link from 'next/link';
import {NextPage} from "next";

const SecondPost: NextPage = () => {
    return <div>
        <h1>
            <Link href='/'>&larr;</Link>&nbsp;Second Post
        </h1>
    </div>
};

export default SecondPost;