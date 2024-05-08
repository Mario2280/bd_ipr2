/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller('metrics')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('user')
  async createUser(username: string, password: string) {
    await this.prismaService
      .$executeRaw`CREATE USER '${username}'@'localhost' IDENTIFIED BY '${password}';`
  }
  @Post('privileges')
  async grantPrivileges(
    username: string,
    database: string,
    table: string,
    privileges: string,
  ) {
    await this.prismaService
      .$executeRaw`GRANT ${privileges} ON ${database}.${table} TO '${username}'@'localhost';`
  }

  @Post('privileges')
  async revokePrivileges(
    username: string,
    database: string,
    table: string,
    privileges: string,
  ) {
    await this.prismaService
      .$executeRaw`REVOKE ${privileges} ON ${database}.${table} FROM '${username}'@'localhost';`
  }

  @Post('privileges')
  async dropUser(username: string) {
    await this.prismaService.$executeRaw`DROP USER '${username}'@'localhost';`
  }
}
