import IPost from '../../posts/interfaces/post.interface';

export const mockedPosts: IPost[] = [
  {
    id: 1,
    title: 'Quem é Letícia?',
    category: {
      id: 1,
      name: 'História do Techknowledge',
      slug: 'historia-do-techknowledge',
      created_at: '2020-05-01T00:00:00.000Z',
      updated_at: '2020-05-01T00:00:00.000Z',
    },
    subtitle: 'A origem desse blog',
    content: '<p style="background-color: yellow">Mikkaiser</p>',
    previewContent:
      '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><p>Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
    slug: 'quem-e-leticia',
    createdAt: '2020-05-01T00:00:00.000Z',
    updatedAt: '2020-05-01T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Techknowledge: Ponto Zero',
    category: {
      id: 1,
      name: 'História do Techknowledge',
      slug: 'historia-do-techknowledge',
      created_at: '2020-05-01T00:00:00.000Z',
      updated_at: '2020-05-01T00:00:00.000Z',
    },
    subtitle:
      'Como surgiu a ideia de criar esse blog, qual o objetivo dele? Qual a  finalidade do nosso projeto? Nesse primeiro post, vamos nos apresentar e  falar um pouco da motivação por trás do TechKnowledge!',
    content:
      '<p>Uma das melhores formas (se não a melhor) de aprender um assunto é ensinando. Transmitindo o conhecimento que nos foi passado. E nos vimos na necessidade de compartilhar nossa experiência, tanto como competidores da Olimpíada do Conhecimento, quanto como desenvolvedores. Demonstrar quais são os problemas que encontramos no dia-a-dia e como os resolvemos. Dessa necessidade, surgiu o Techknowledge!</p><h3>Por que "Techknowledge"?</h3><p>Vamos começar pelo nome, claro…</p><p>"Tech" faz referência ao termo em inglês, que quer dizer "Tecnologia". A outra parte do nome, "Knowledge", que dizer <b>conhecimento</b>. À primeira vista, pode parecer estranho, mas é fácil de se acostumar, prometo ;)</p><p>Eu e a Letícia brincávamos durante o período da competição, nos autoproclamamos "atletas do conhecimento", justamente por todo o contexto da olimpíada e o tempo dos treinos, que, de uma forma ou de outra, nos tornavam atletas. </p> <p>   Logo, a palavra "conhecimento" já era uma certeza nossa em relação ao nome do blog. E como queremos falar sobre tecnologia, programação e afins, um nome "Tech" vem a calhar (além de ser bem legal, convenhamos). </p> <h3>Planejamento</h3> <p>   Nós sabíamos que seria necessário reservar um tempo fixo durante a semana para dedicarmos ao blog. Até porque planejar uma aplicação exige tempo de pesquisa, modelagem, testes e muito estudo. Então, semanalmente, combinamos de nos reunir em uma <i>call</i> no Google Meeting, todo sábado. </p> <p>   A hora podia variar, mas estabelecemos que 3 horas por semana seria um tempo adequado e que encaixaria bem tanto na minha agenda, quanto da Letícia. </p> <p>   Já imaginamos quais seriam as fases do planejamento da aplicação, que incluía levantar os requisitos, buscar referências, modelar banco de dados, escolher tecnologias, fazer protótipos de baixa, média e alta fidelidade, entre outros itens. Isso apenas para estabelecer qual seria o terreno do qual esse blog iria crescer. Pois uma professora nossa, chamada Leyla Carolyne (ainda vamos mencionar ela bastante em outros posts) nos disse uma vez que 80% do tempo de construção de um software é na fase no-code, e os outros de 20% que são, de fato, implementação. </p> <h3>Referências</h3> <p>   Nos dedicamos durante 3 meses para os passos que mencionamos acima. Fizemos todo o design das páginas, nos inspirando na estrutura do <a href="https://stackoverflow.blog/">Blog do Stack Overflow</a> e da <a href="https://blog.rocketseat.com.br/?">Rocketseat</a>, além do    <a href="https://www.joshwcomeau.com/">Blog do Josh</a>, que, em minha humilde opinião, é o mais bonito visualmente. </p> <h3>O que vem a seguir?</h3> <p>   Esta é a versão 1.0.0 de nosso blog, nosso MVP, então a organização de alguns itens do layout e a estilização das páginas não estão <b>ainda</b> em sua forma final, na que modelamos no Figma.   Mas estamos muito orgulhosos de pôr ele no ar, de ver nosso projeto ganhando vida e crescendo cada vez mais! </p> <p>   Esse é apenas um dos muitos posts que vamos documentar nossa experiência durante a criação do blog, explicando o porquê de cada decisão relacionada à negócio, design, tecnologias utilizadas e muito mais! </p>',
    previewContent:
      '<p>Como surgiu a ideia de criar esse blog, qual o objetivo dele? Qual a  finalidade do nosso projeto? Nesse primeiro post, vamos nos apresentar e  falar um pouco da motivação por trás do TechKnowledge!</p>',
    slug: 'por-que-esse-blog-existe',
    createdAt: '2020-05-01T00:00:00.000Z',
    updatedAt: '2020-05-01T00:00:00.000Z',
  },
  {
    id: 3,
    title: 'Quem é Mikael?',
    category: {
      id: 1,
      name: 'História do Techknowledge',
      slug: 'historia-do-techknowledge',
      created_at: '2020-05-01T00:00:00.000Z',
      updated_at: '2020-05-01T00:00:00.000Z',
    },
    subtitle: 'A origem desse blog',
    content:
      '<p>Então... meu nome é Mikael Ribeiro Simões, tenho 20 anos e sou Desenvolvedor Full Stack</p>',
    previewContent:
      '<p>Então... meu nome é Mikael Ribeiro Simões, tenho 20 anos e sou Desenvolvedor Full Stack</p>',
    slug: 'quem-e-mikael',
    createdAt: '2020-05-01T00:00:00.000Z',
    updatedAt: '2020-05-01T00:00:00.000Z',
  },
];
