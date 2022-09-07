import { TestEntity as TTestEntity } from "../api/testEntity/TestEntity";

export const TESTENTITY_TITLE_FIELD = "testField";

export const TestEntityTitle = (record: TTestEntity): string => {
  return record.testField || record.id;
};
