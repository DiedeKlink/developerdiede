import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Over mij' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <h2>Werkervaring</h2>
        <p>2015-2017 Premiums.mobi BV</p>
        <ul>
          <li>Seo Tekstschrijver en Frontend ontwikkelaar</li>
        </ul>
        <p>2018-2024 Arimpex Media Services</p>
        <ul>
          <li>Frontend ontwikkelaar</li>
          <li>
            Doorvoeren redesigns en toevoegen nieuwe functionaliteiten aan vraag- en aanbodsites{' '}
            <Link href="/projecten/botentekoop" title="Botentekoop.nl">
              Botentekoop.nl
            </Link>{' '}
            en{' '}
            <Link href="/projecten/camperscaravans" title="CampersCaravans.nl">
              CamperCaravans.nl
            </Link>
          </li>
          <li>
            Bouwen CMS{' '}
            <Link href="/projecten/botenwebmanager" title="Botenwebmanager">
              BotenWebManager
            </Link>
            . Portaal voor zakelijke klanten voor het eenvoudig toevoegen, online/offline zetten van
            advertenties
          </li>
        </ul>
        <h2>Opleidingen</h2>
        <p>
          2024 ByteGrad{' '}
          <a
            href="https://bytegrad.com/courses/professional-react-nextjs"
            title="Professional React & Next.js Course"
            target="_blank"
          >
            Professional React & Next.js Course
          </a>
        </p>
        <p>
          Aan de hand van deze cursus heb ik vijf React apps en twee Next.js apps gebouwd. Zie{' '}
          <Link href="/projecten" title="Projecten">
            projecten
          </Link>{' '}
          voor details
        </p>
        <ul>
          <li>React fundamentals (deep)</li>
          <li>Advanced React</li>
          <li>Next.js fundamentals</li>
          <li>Advanced Next.js</li>
          <li>TypeScript mastery</li>
          <li>Tailwind mastery</li>
          <li>Best practices & patterns</li>
          <li>Full-Stack Apps</li>
          <li>Ecosystem (Shadcn, etc.)</li>
        </ul>
      </AuthorLayout>
    </>
  )
}
