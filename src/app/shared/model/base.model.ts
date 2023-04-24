import { PmsStaticLibService } from '../service/pms-static-lib.service';

/**
 * 基础类型
 * @export
 * @class BaseModel
 */
export class BaseModel {
  userId: string = ''; // 用户
  tenantsid: number = 1; // 租户
  create_time: Date; // 创建时间
  create_by: string = ''; // 创建人
  modi_time: Date; // 修改时间
  modi_by: string = ''; // 修改人
  pms_status: string = '0'; // 状态
  iam_userId: string = ''; // 登录账号

  constructor(values: any) {
    Object.assign(this, values);

    const userInfo = PmsStaticLibService.pmsGetUserInfo();
    if (userInfo) {
      if (userInfo['tenantSid'] !== '') {
        this.tenantsid = userInfo['tenantSid'];
      }
      // this.userId = userInfo['userId'];
      this.userId = userInfo['pms_userId'];
      this.iam_userId = userInfo['userId'];
    }
    console.log(userInfo);
  }
}

/**
 * 查询参数类型
 * @export
 * @class PMSQueryMode
 */
export class PMSQueryMode {
  userId: string = ''; // 用户
  tenantsid: number = 0; // 租户
  code: string = ''; // 编码
  iam_userId: string = ''; // 登录账号
  version: string = ''; // 登录账号
  constructor(values: any) {
    Object.assign(this, values);

    const userInfo = PmsStaticLibService.pmsGetUserInfo();
    if (userInfo) {
      if (userInfo['tenantSid'] !== '') {
        this.tenantsid = userInfo['tenantSid'];
      }
      // this.userId = userInfo['userId'];
      this.userId = userInfo['pms_userId'];
      this.iam_userId = userInfo['userId'];
    }

    console.log('userInfo', userInfo);
  }
}

/**
 * 查询参数类型
 * @export
 * @class PMSQueryMode
 */
export class PMSQueryProject {
  userId: string = ''; // 用户
  tenantsid: number = 0; // 租户
  code: string = ''; // 编码
  iam_userId: string = ''; // 登录账号
  version: string = ''; // 登录账号
  constructor(values: any) {
    Object.assign(this, values);

    const userInfo = PmsStaticLibService.pmsGetUserInfo();
    if (userInfo) {
      if (userInfo['tenantSid'] !== '') {
        this.tenantsid = userInfo['tenantSid'];
      }
      // this.userId = userInfo['userId'];
      this.userId = userInfo['pms_userId'];
      this.iam_userId = userInfo['userId'];
    }

    console.log('userInfo', userInfo);
  }
}
