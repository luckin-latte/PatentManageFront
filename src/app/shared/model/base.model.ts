
export class QueryInfo {
  pageable: boolean = true;
  pageSize: number = 10;
  pageNum: number = 1;
  criteriaField?: {
      [key: string]: QueryCriteriaInfo;
  };
  criteria?: QueryCriteria;
  getRawValue(): any {
    return {
      pageable: this.pageable,
      pageSize: this.pageSize,
      pageNum: this.pageNum,
      criteriaField: this.criteriaField,
      criteria: this.criteria
    }
  }
  constructor() {
    this.criteriaField = {};
    this.criteria = new QueryCriteria();
  }
  setCriteria(criteria: QueryCriteria): void {
    this.criteria = criteria;
  }
  addCriteriaField(item: QueryCriteriaInfo): void {
    if (!this.criteriaField) {
      this.criteriaField = {};
    }
    this.criteriaField[item.key] = item;
  }
  clearCriteriaValue(): void {
    this.criteriaField = {};
  }
  clear(): void {
    this.pageable = true;
    this.pageSize = 10;
    this.pageNum = 1;
    this.criteriaField = {};
    this.criteria = new QueryCriteria();
  }
}

export class QueryCriteria {
  joinOperator?: string;
  items?: (QueryCriteriaInfo | QueryCriteria)[];
  constructor(joinOperator?: string) {
    this.joinOperator = joinOperator;
    this.items = [];
  }
  addCriteria(criteria: QueryCriteriaInfo | QueryCriteria): void {
    this.items?.push(criteria)
  }
  clearValue(): void {
    this.items = [];
  }
}

export class QueryCriteriaInfo {
  key: string = '';
  values?: string[];
  value?: string;
  operator: string = '';
  constructor(key: string, value: string | string[], operator: string) {
    this.key = key;
    if (Array.isArray(value)) {
      this.values = value;
    } else {
      this.value = value;
    }
    this.operator = operator;
  }
}

export enum QueryCriteriaOperator {
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
