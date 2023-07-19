import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface RecursosPost {
  title: string;
  publishedAt: string;
  descripcion: string;
  featuredImg: any;
  textoPrincipal: any;
  slug: string;

}

export interface ComunidadPost {
  title: string;
  publishedAt: string;
  description: string;
  featuredImg: any;
  textoPrincipal: any;
  slug: string;
  fechaDePublicacion: string;
}

export interface EditorialesPost {
  title: string;
  slug: string;
}

export interface JuegosPost {
  title: string;
  LinkBgg: string;
  GameBuyPrice: string;
  imagenDestacada: any,
  GameInStock: Boolean;
  publisher: PublisherInfo[];
  description: string;
  textoPrincipal: any;
  slug: string;
  createdAt: string;
}

export interface Colecctions {
  title: any;
  slug: string,
  CollectionGames: JuegosPost[],
}

export interface PublisherInfo {
  title: any;
}

export interface ContactInfo {
  titulo: string;
  link: string;
}

export interface Carrousel {
  title: string;
  slug: string;
  texto: string;
  images: any;
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

// export const contentfulClient = contentful.createClient({
//   space: import.meta.env.CONTENTFUL_SPACE_ID,
//   accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
//   host: "cdn.contentful.com",
// });