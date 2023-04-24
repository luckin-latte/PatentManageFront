export declare class QueryConditionInfo {
  name: string;
  values?: string[];
  value?: string;
  operator: string;
  constructor(name: string, value: string | string[], operator: string);
}
export declare enum QueryConditionOperator {
  IN = "IN",
  AND = "AND",
  OR = "OR",
  LIKE = "LIKE",
  EQUAL = "EQUAL",
  NOTEQUALS = "NotEquals",
  LESSTHAN = "LessThan",
  LESSTHANOREQUALTO = "LessThanOrEqualTo",
  GREATERTHAN = "GreaterThan",
  GREATERTHANOREQUALTO = "GreaterThanOrEqualTo",
  BETWEEN = "Between"
}
export declare class QueryCondition {
  joinOperator: string;
  items: (QueryConditionInfo | QueryCondition)[];
  constructor(joinOperator?: string);
  addCondition(condition: QueryConditionInfo | QueryCondition): void;
  clearValue(): void;
}
export declare class QueryInfo {
  pageable: boolean;
  pageSize: number;
  pageNumber: number;
  conditionField: {
      [key: string]: QueryConditionInfo;
  };
  condition: QueryCondition;
  getRawValue(): any;
  constructor();
  setCondition(condition: QueryCondition): void;
  addConditionField(item: QueryConditionInfo): void;
  clearConditionValue(): void;
  clear(): void;
}
