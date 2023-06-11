import Head from 'next/head';

interface IProps {
  title : string;
}

export default function Seo({title}:IProps) {
  return (
    <Head>
      <title>{title} | JeongEun</title>
    </Head>
  )
  
}