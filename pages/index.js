import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return(
    <>
    <div>
      <Head>
        <title>トップページ</title>
      </Head>
      <ul>
        <li>
           <Link href="/about">
             <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
    </>
  );
}
