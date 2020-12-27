import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {User} from "./User";

@Entity('articles')
export class Article {
    @PrimaryColumn({length:30})
    slug: string

    @Column({length: 50})
    title: string

    @Column({type: 'text', nullable: true})
    description?: string  // ? to set nullable

    @Column({type: 'text'})
    body: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    UpdatedAt: Date

    @ManyToOne(()=> User)
    @JoinColumn()
    author: User


/*

    "tagList": ["dragons", "training"], //TODO: Relationship with tags
    "favorited": false, //TODO: Relationship with user
    "favoritesCount": 0,
    "author": { //TODO: Relationship with user
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
*/
}