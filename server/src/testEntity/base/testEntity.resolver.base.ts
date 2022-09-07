/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTestEntityArgs } from "./CreateTestEntityArgs";
import { UpdateTestEntityArgs } from "./UpdateTestEntityArgs";
import { DeleteTestEntityArgs } from "./DeleteTestEntityArgs";
import { TestEntityFindManyArgs } from "./TestEntityFindManyArgs";
import { TestEntityFindUniqueArgs } from "./TestEntityFindUniqueArgs";
import { TestEntity } from "./TestEntity";
import { TestEntityService } from "../testEntity.service";

@graphql.Resolver(() => TestEntity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TestEntityResolverBase {
  constructor(
    protected readonly service: TestEntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TestEntity",
    action: "read",
    possession: "any",
  })
  async _testEntitiesMeta(
    @graphql.Args() args: TestEntityFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TestEntity])
  @nestAccessControl.UseRoles({
    resource: "TestEntity",
    action: "read",
    possession: "any",
  })
  async testEntities(
    @graphql.Args() args: TestEntityFindManyArgs
  ): Promise<TestEntity[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TestEntity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TestEntity",
    action: "read",
    possession: "own",
  })
  async testEntity(
    @graphql.Args() args: TestEntityFindUniqueArgs
  ): Promise<TestEntity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TestEntity)
  @nestAccessControl.UseRoles({
    resource: "TestEntity",
    action: "create",
    possession: "any",
  })
  async createTestEntity(
    @graphql.Args() args: CreateTestEntityArgs
  ): Promise<TestEntity> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TestEntity)
  @nestAccessControl.UseRoles({
    resource: "TestEntity",
    action: "update",
    possession: "any",
  })
  async updateTestEntity(
    @graphql.Args() args: UpdateTestEntityArgs
  ): Promise<TestEntity | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TestEntity)
  @nestAccessControl.UseRoles({
    resource: "TestEntity",
    action: "delete",
    possession: "any",
  })
  async deleteTestEntity(
    @graphql.Args() args: DeleteTestEntityArgs
  ): Promise<TestEntity | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
