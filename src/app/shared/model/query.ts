
export class QueryInfo {
  pageable: boolean = true;
  pageSize: number = 10;
  pageIndex: number = 1;
  criteria?: QueryCriteria;
  getRawValue(): any {
    return {
      pageable: this.pageable,
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
      criteria: this.criteria
    }
  }
  constructor() {
    this.criteria = new QueryCriteria();
  }
  setCriteria(criteria: QueryCriteria): void {
    this.criteria = criteria;
  }
  clear(): void {
    this.pageable = true;
    this.pageSize = 10;
    this.pageIndex = 1;
    this.criteria = new QueryCriteria();
  }
}

export class QueryCriteria {
  items?: (QueryCriteriaInfo | QueryCriteria)[];
  constructor() {
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
  constructor(key: string, value: string | string[]) {
    this.key = key;
    if (Array.isArray(value)) {
      this.values = value;
    } else {
      this.value = value;
    }
  }
}
