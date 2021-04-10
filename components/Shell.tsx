import React from 'react'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function ApplicationShell({ title, children }: { title: string, children }) {
  return <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
}