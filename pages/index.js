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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
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
