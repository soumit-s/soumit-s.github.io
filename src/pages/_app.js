import Head from 'next/head'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <Script src="https://cdn.jsdelivr.net/npm/kute.js@2.2.4/dist/kute.min.js" integrity="sha256-ekq8UIBrOC1lgaJmRRV/c50s5Hy/EBKjBD/7nM9dvp0=" crossorigin="anonymous" />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      </Head>
    </>
  )
}