export interface IConfig {
    port: number | string;
    dbName: string;
    dbUsername: string;
    dbPassword: string;
    dbHost: string;
    dbDialect: Dialect;
    jwtSecret: string;
    sentryKey: string;
    environment: string
}

export enum Dialect {
    MY_SQL = 'mysql',
    POSTGRES = 'postgres',
    SQLITE = 'sqlite',
    MARIA_DB = 'mariadb',
    MSSQL = 'mssql'
}
