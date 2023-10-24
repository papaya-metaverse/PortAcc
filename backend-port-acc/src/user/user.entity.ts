import {
    Column,
    Entity, Index,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  @Entity()
  export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Index({unique: true})
    @Column({ nullable: true })
    email: string;

    @Index({unique: true})
    @Column({ nullable: true })
    pubkey: string;

    @Index({unique: true})
    @Column({ nullable: true })
    privatekey: string;
    
    @Column({ nullable: true })
    refreshToken?: string;

    @Column({ nullable: true })
    extAuthAccessToken: string;
  }