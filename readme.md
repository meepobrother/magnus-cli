## @notadd/cli


install
```sh
npm i -g @notadd/cli
```

create @nestjs/graphql .graphql file

```sh
notadd graphql -i main.ts -o notadd.graphql
```


demo

```ts
import { Resolver, Query } from "@nestjs/graphql";
export interface List<T> {
    data: T[];
    currentPage: number;
    pageSize: number;
    total: number;
}
export interface User {
    username: string;
}
export interface Article {
    title: string;
}
@Resolver()
export class DemoResolver {
    @Query()
    getUser(): List<User> {
        return {} as any;
    }
    @Query()
    getArticles(): List<Article> {
        return {} as any;
    }
}
```

```graphql
type User {
  username: String!
}

type UserList {
  data: [User]!
  currentPage: Int!
  pageSize: Int!
  total: Int!
}

type Article {
  title: String!
}

type ArticleList {
  data: [Article]!
  currentPage: Int!
  pageSize: Int!
  total: Int!
}

type Query {
  getUser: UserList!
  getArticles: ArticleList!
}
```