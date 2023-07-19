import React from "react";
import * as containerStyles from "./NewsCard.module.css";
const QueryComunidadNotasLastComponent = ({ post }) => {
  const data = post;
  return (
    <div className={containerStyles.gridContainer}>
      {data.map(
        ({ id, title, slug, fechaDePublicacion, description, featuredImg, textoPrincipal }) => {
          return (
            <div key={slug} className={containerStyles.item}>
              <div className={containerStyles.imageContainer}>
                <img
                  src={featuredImg.fields.file.url}
                  className={containerStyles.image}
                  alt={title}
                  width="300"
                  height="200"
                />
              </div>
              <div className={containerStyles.content}>
                <h2 className={containerStyles.title}>{title}</h2>
                <p className={containerStyles.description}>{description}</p>
                <time>{fechaDePublicacion}</time>
                <div className={containerStyles.buttonContainer}>
                  {textoPrincipal && (
                    <a
                      className="btn blue"
                      key={slug}
                      href={`/comunidad/proyectos-que-nos-potencian/${slug}/`}
                    >
                      Leer más
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default QueryComunidadNotasLastComponent;
