import React from "react"
import crtt from "@contentful/rich-text-types"
// import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// @ts-ignore
import { Player, BigPlayButton } from "video-react"
const Bold = ({ children }: any) => (
  <span className="font-serif font-bold">{children}</span>
)

const Text = ({ children }: any) => <p className="font-serif block">{children}</p>

const website_url = "https://www.kallpaludica.com.ar"

const options = {
  renderMark: {
    [crtt.MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
    [crtt.MARKS.CODE]: (embedded: any) => (
      <div dangerouslySetInnerHTML={{ __html: embedded }} />
    ),
  },
  renderNode: {
    [crtt.BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data?.target?.fields?.file?.contentType === "video/mp4") {
          return (
            <div className="max-w-3xl relative p-0 mx-auto my-6 mb-12 aspect-h-9 aspect-w-16">
              <Player src={node.data?.target?.fields?.file?.url} loop={true}>
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <img
                src={node.data?.target?.fields?.file?.url}
                alt={node.data?.target?.fields?.title}
              />
            </div>
          )
        }
      }
    },



    [crtt.BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data?.target?.sys.contentType.sys.id === "articulos") {
          return (
            <a
              href={`/tienda-de-juegos/${node.data?.target?.fields?.slug}`}
              className="article-card"
            >
              <div className="relative content">
                <small>Juego</small>
                <h3>{node.data?.target?.fields?.title}</h3>
                <div className="font-sans text-xl font-bold text-green-600">
                  ${node.data?.target?.fields?.GameBuyPrice}
                </div>
              </div>
              <div className="image">
                asd
              </div>
            </a>
          )
        }
        if (node.data?.target?.sys.contentType.sys.id === "editorial") {
          return (
            <a
              href={`/editoriales/${node.data?.target?.fields?.slug}`}
              className="article-card"
            >
              <div className="w-40 image">
                {node.data?.target?.fields?.title}
              </div>
              <div className="flex flex-col items-end justify-center font-serif">
                <small className="font-bold">
                  Editorial {node.data?.target?.fields?.title}
                </small>
                <small className="btn yellow">Ver juegos en la tienda</small>
              </div>
            </a>
          )
        }
        if (node.data?.target?.sys.contentType.sys.id === "colecciones") {
          return (
            <a
              href={`/tienda-de-juegos/colecciones/${node.data?.target?.fields?.slug}`}
              className="article-card"
            >
              <div className="content">
                <small>Colección</small>
                <h3>{node.data?.target?.fields?.title}</h3>
                <p>
                  {node.data?.target?.fields?.CollectionDescription.CollectionDescription}
                </p>
              </div>
              <div className="image">
                {node.data?.target?.fields?.title}
              </div>
            </a>
          )
        }
        if (node.data?.target?.sys.contentType.sys.id === "comunidad") {
          return (
            <a
              href={`/comunidad/${node.data?.target?.fields?.slug}`}
              className="article-card"
            >
              <div className="w-24 image">
                {node.data?.target?.fields?.title}
              </div>
              <div className="flex items-center justify-end">
                <div className="flex flex-col font-bold text-right">
                  <small className="font-bold">{node.data?.target?.fields?.title}</small>
                  <small className="btn yellow">Proyectos que nos potencian</small>
                </div>
              </div>
            </a>
          )
        } else {
          return (
            <a
              href={`/comunidad/recursos/${node.data?.target?.fields?.slug}`}
              className="article-card"
            >
              <div className="content">
                <small>Recurso</small>
                <h3>{node.data?.target?.fields?.title}</h3>
              </div>
              <div className="image">
                {node.data?.target?.fields?.title}
              </div>
            </a>
          )
        }
      }
    },

    [crtt.INLINES.EMBEDDED_ENTRY]: (node: any) => {
      if (!node.data || !node.data?.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data?.target?.sys.contentType === "ContentfulArticulos") {
          return (
            <a href={`/tienda-de-juegos/${node.data?.target?.fields?.slug}`}>
              {node.data?.target?.fields?.title}
            </a>
          )
        }
        if (node.data?.target?.sys.contentType === "ContentfulEditorial") {
          return (
            <a href={`/tienda-de-juegos/editoriales/${node.data?.target?.fields?.slug}`}>
              {node.data?.target?.fields?.title}
            </a>
          )
        }
        if (node.data?.target?.sys.contentType === "ContentfulColecciones") {
          return (
            <a href={`/tienda-de-juegos/colecciones/${node.data?.target?.fields?.slug}`}>
              {node.data?.target?.fields?.title}
            </a>
          )
        }
        if (node.data?.target?.sys.contentType === "ContentfulComunidad") {
          return (
            <a href={`/comunidad/${node.data?.target?.fields?.slug}`}>
              {node.data?.target?.fields?.title}
            </a>
          )
        } else {
          return (
            <a href={`/comunidad/recursos/${node.data?.target?.fields?.slug}`}>
              {node.data?.target?.fields?.title}
            </a>
          )
        }
      }
    },

    [crtt.INLINES.HYPERLINK]: (node: any) => {
      return (
        <a
          href={node.data.uri}
          className="inline-flex items-baseline px-1 font-bold duration-700 rounded hover:text-green-600 hover:px-3"
          target={`${node.data.uri.startsWith(website_url) ? "_self" : "_blank"
            }`}
          rel={`${node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
            }`}
        >
          {node.content[0].value}
        </a>
      )
    },
    [crtt.BLOCKS.PARAGRAPH]: (_: any, children: any) => <Text>{children}</Text>,
  },
}

const FormatText = ({ FormatText }: any) => (
  <>{documentToReactComponents(FormatText, options)}</>

)

export default FormatText
