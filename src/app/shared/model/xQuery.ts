
export class xQueryInfo {
  pageable: boolean = true;
  pageSize: number = 10;
  pageIndex: number = 1;
  
  items?: (xQueryItemInfo)[];

  getRawValue(): any {
    return {
      pageable: this.pageable,
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
      items: this.items
    }
  }
  constructor() {
    this.items = [];
  }
  addItem(item: xQueryItemInfo): void {
    this.items?.push(item)
  }
  clear(): void {
    this.pageable = true;
    this.pageSize = 10;
    this.pageIndex = 1;
    this.items = [];
  }
}

export class xQueryItemInfo {
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
