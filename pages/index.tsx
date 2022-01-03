import type { NextPage } from 'next'
import Home from "../components/Home";
import { getSortedPostsData } from '../lib/posts'
import {GetStaticProps} from "next";

export interface IBase {
  allPostsData: any[];
}

export const getStaticProps: GetStaticProps<IBase> = async () => {
  console.info('inside Base component index page. inside getStaticProps function');
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
