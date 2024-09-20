# Nome do Aplicativo

Podcast Menager

### Descrição

Um app ao estilo netflix, a onde possa centralizar diferentes episodios de podcasts, a nível de categoria

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os podcasts em sessões de categorias
  - Ex: [saúde, fitness, mentalidade, humor]
- Filtrar episodios por nome do podcast (flow, Inteligencia Ilimitada etc...)

## Como

#### Features:

Listar os episodios podcasts em sessões de categorias

### Como vou implementar:

Vou retornar em uma api rest o nome do podcast, nome do episodio, imagem de capa, link, categoria

```js
[
  {
    podcastName: "flow",
    episodio: "CBUM - Flow #319",
    cover: "https://i.ytimg.com/vi/tTUd23ii4lk/maxresdefault.jpg",
    videoId:"tTUd23ii4lk",
    link: "https://youtu.be/tTUd23ii4lk?si=aROYj5RIT0SZmg9u",
    category: ["saude", "bodybuilder"],
  },
  {
    podcastName: "inteligencia limitada",
    episodio: "CBUM - Flow #342",
    cover: "    https://i.ytimg.com/vi/apowm2bMcFk/maxreshqdefault.jpg",
    videoId:"apowm2bMcFk",
    link: "https://www.youtube.com/watch?v=apowm2bMcFk",
    category: ["espote", "corrida"],
  },
];
```
