import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TestEntityResolverBase } from "./base/testEntity.resolver.base";
import { TestEntity } from "./base/TestEntity";
import { TestEntityService } from "./testEntity.service";

@graphql.Resolver(() => TestEntity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TestEntityResolver extends TestEntityResolverBase {
  constructor(
    protected readonly service: TestEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
