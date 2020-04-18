import { Column, DataType, Model, Table, } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'Users'
})
export class User extends Model<User> {
    @Column({
        allowNull: false,
        type: DataType.CHAR(50)
    })
    firstName!: string;

    @Column({
        allowNull: false,
        type: DataType.CHAR(50)
    })
    lastName!: string;

    @Column({
        allowNull: false,
        type: DataType.CHAR(50)
    })
    email!: string;

    @Column({
        allowNull: false,
        type: DataType.TEXT
    })
    password!: string;

    @Column({
        type: DataType.CHAR(100)
    })
    profilePic?: string;
}