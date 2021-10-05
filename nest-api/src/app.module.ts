import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Transaction } from './transactions/entities/transaction.entity';
import { Account } from './accounts/entities/account.entity';
import { AccountsModule } from './accounts/accounts.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: process.env.DB_CONNECTION as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Transaction, Account],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        alter: true,
        // force: true // NOTE - caso o banco de dados não conseguir atualizar alguma tabela, coluna, etc
      },
    }),
    TransactionsModule,
    AccountsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
