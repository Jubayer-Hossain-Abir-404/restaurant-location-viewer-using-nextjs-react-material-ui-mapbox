import Head from 'next/head'
import Body from '../components/Body'
import Nav from '../components/Nav'
import { server } from '../config';

export default function Home() {
  const mapBoxCSS = `${server}/mapbox-gl.css`;
  return (
    <>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Restaurant Page" />
        <link rel="icon" href="/favicon.ico" />
        <link href={mapBoxCSS} rel="stylesheet" />
      </Head>
      <Nav />
      <Body />
      <script
        src="https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js"
        defer
      ></script>
    </>
  );
}
