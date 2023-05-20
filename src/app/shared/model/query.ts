export class QueryConditionInfo {
  name: string = '';
  values?: string[];
  value?: string;
  operator: string = '';
  constructor(name: string, value: string | string[], operator: string) {
    this.name = name;
    if (Array.isArray(value)) {
      this.values = value;
    } else {
      this.value = value;
    }
    this.operator = operator;
  }
}
export enum QueryConditionOperator {
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
export class QueryCondition {
  joinOperator?: string;
  items?: (QueryConditionInfo | QueryCondition)[];
  constructor(joinOperator?: string) {
    this.joinOperator = joinOperator;
  }
  addCondition(condition: QueryConditionInfo | QueryCondition): void {
    this.items?.push(condition)
  }
  clearValue(): void {
    this.items = [];
  }
}
export class QueryInfo {
  pageable: boolean = true;
  pageSize: number = 10;
  pageNumber: number = 1;
  conditionField?: {
      [key: string]: QueryConditionInfo;
  };
  condition?: QueryCondition;
  getRawValue(): any {
    const rawValue: any = {};
    rawValue.pageable = this.pageable;
    rawValue.pageSize = this.pageSize;
    rawValue.pageNumber = this.pageNumber;
    rawValue.conditionField = this.conditionField;
    rawValue.condition = this.condition;
    return rawValue;
  }
  constructor() {
  }
  setCondition(condition: QueryCondition): void {
    this.condition = condition;
  }
  addConditionField(item: QueryConditionInfo): void {
    if (!this.conditionField) {
      this.conditionField = {};
    }
    this.conditionField[item.name] = item;
  }
  clearConditionValue(): void {
    this.conditionField = undefined;
    this.condition = undefined;
  }
  clear(): void {
    this.pageable = true;
    this.pageSize = 10;
    this.pageNumber = 1;
    this.conditionField = undefined;
    this.condition = undefined;
  }
}
