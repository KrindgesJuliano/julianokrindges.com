import React from 'react'

import { Content } from './styles'

export default function Author({ fullText }) {
  return (
    <Content>
      <>
        {fullText && <h1>Olá!</h1>}
        <p>
          Meu nome é Juliano Krindges. Apaixonado por tecnologia e quadrinhos em
          busca de oportunidades para desenvolver minhas habilidades técnicas e
          pessoais. Focado em desenvolvimento Web e Mobile, atualmente devorando
          cursos, livros e artigos sobre Front-End, e suas tecnologias
          envolvidas, com foco em React.js, React Native e Node.js
        </p>
        {fullText && (
          <>
            <p>
              desenvolvimento Web JavaScript Fullstack,Front End com ReactJS com
              e Mobile com React Native, Backend com NodeJS principalmente APIs
              Rest (express e AdonisJS). Conhecimentos em GIT, arquitetura MVC e
              FLux no React com Redux, bom conhecimento em Banco de Dados SQL
              (postgres) e iniciante em noSQL, Clean Code e boas práticas de
              código.
            </p>
          </>
        )}
      </>
    </Content>
  )
}
