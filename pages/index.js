import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container bg-gray-100">
      <Head>
        <title>My Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description text-2xl text-gray-700 font-extralight">
          Hello World!
        </p>
      </main>

      <Footer />
    </div>
  )
}
