import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Layout({title,children}) {
  return (
    <>
      <Head>
        <title>{title? title + "- Unigram" : "Unigram"}</title>
        <meta name="description" content="Social app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">Unigram</Link>
            <div>
                <Link className="p-2" href="/add">Add</Link>
                <Link className="p-2" href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">
         {children}
        </main>
        <footer className="flex h-10 justify-center shadow-inner items-center">
         <p>Copyright 2022 unigram</p>
        </footer>
    </div>
    </>
  )
}
