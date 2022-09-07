import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TestEntityServiceBase } from "./base/testEntity.service.base";

@Injectable()
export class TestEntityService extends TestEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
