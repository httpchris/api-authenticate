import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BeforeInsert, 
  BeforeUpdate 
} from 'typeorm';

import bcript from 'bcryptjs';

@Entity('users')
class user {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    this.password = bcript.hashSync(this.password, 8); 
  }
} 

export default user;