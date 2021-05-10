import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('playlist')
export class Playlist {
  @PrimaryGeneratedColumn()
  readonly id?: string;

  @Column()
  name: string;

  @Column()
  owner_id: string;

  @Column()
  public: boolean;

  @Column()
  guild_id: string;

  constructor(props: Playlist) {
    Object.assign(this, props);
  }
}