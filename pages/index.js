import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Restaurant Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
  
    </>
  )
}
