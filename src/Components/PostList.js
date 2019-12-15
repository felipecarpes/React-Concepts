import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Felipe Carpes",
          avatar: "https://avatars3.githubusercontent.com/u/51215640?s=460&v=4"
        },
        date: "15 Dez 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real) do comentário."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gustavo Karnopp",
          avatar: "https://avatars1.githubusercontent.com/u/40615144?s=400&v=4"
        },
        date: "15 Dez 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Felipe Carpes",
              avatar:
                "https://avatars3.githubusercontent.com/u/51215640?s=460&v=4"
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 4,
            author: {
              name: "Walter Marcel Garcia",
              avatar:
                "https://avatars2.githubusercontent.com/u/42740517?s=400&v=4"
            },
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="PostList">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
