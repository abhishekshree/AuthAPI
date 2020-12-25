import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";


@Entity()
export class User {

    @PrimaryColumn()
    email: string

    @Column({unique: true, nullable: false})
    username: string

    @Column()
    password?:string

    @Column({type: 'text', nullable: true})
    bio?: string

    @Column({nullable: true})
    image?: string

}

/*
{
  "user": {
    "token": "jwt.token.here", // TODO: implement JWT
  }
}
 */