import type { NextPage } from 'next'
import Home from "../components/Home";
import { getSortedPostsData } from '../lib/posts'

export interface IBase {
  allPostsData: any[];
}

export async function getStaticProps() {
  console.info('inside Base index page. inside getStaticProps function');
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

const Base: NextPage<IBase> = (props) => {
  return <Home posts={props.allPostsData as any[]}/>
}

export default Base;
