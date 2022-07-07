import { graphql  } from 'gatsby';
import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import SEO from '../../../components/layout/Seo';
import DisplaySinglePlaystationGame from '../../../components/playstation/displaySingleGame/DisplaySinglePlaystationGame';
import  * as styles from './singlePlaystationGamePage.module.scss';

export type SinglePlaystationGameType = {

    strapiPlaystationGame: {
      id: string
      title: string
      description: {
        data: {
          description: string
        }
      }
      image: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: {
              layout: string
              placeholder: {
                fallback: string
              }
              images: {
                fallback: {
                  src: string
                  srcSet: string
                  sizes: string
                }
                sources: Array<any>
              }
              width: number
              height: number
            }
          }
          url: string
        }
      }
      language: string
      price: number
      stock: string
      videoUrl: string
      publisher: string
      pegi: number
      platform: string
      genre: string
      discountPrice: string
      strapi_id: number
    }
 
  extensions?: {}
}

interface Props{
  pageContext:{
    id: string,
    title: string,
  }
  data:SinglePlaystationGameType
}


const SinglePlaystationGamePage :React.FC<Props> = ({pageContext,data}) => {
    const{title,description} = data.strapiPlaystationGame;  

  return (
<div className={styles.singleGameContainer}> 
      <SEO title={title} description={description.data.description} />
     <Navbar/>
     <DisplaySinglePlaystationGame gameData = {data}/>
   
</div>
);
};

export default SinglePlaystationGamePage


export const query = graphql`
query myQuery ($title: String) {
  strapiPlaystationGame(title: {eq: $title}) {
    id
    title
    description {
      data {
        description
      }
    }
    image {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 200, formats: WEBP)
        }
        url
      }
    }
    language
    price
    stock
    videoUrl
    publisher
    pegi
    platform
    genre
    discountPrice
    strapi_id
  }
}

`