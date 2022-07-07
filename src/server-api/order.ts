export interface ISuccess {
  readonly type: 'success';
}

export interface IFail {
  // 何故失敗したか、などはここでは判定できなくてもよいものとしています
  readonly type: 'fail';
}

export type OrderResultTypes = ISuccess | IFail;

export interface IOrderApi {
  /**
   * 実装方法は様々あると思いますが、ここでは例外ではなく結果として成功か失敗を返しています
   *
   * @param candidateDates 候補日。1つ以上。上限はないものとする
   */
  order(candidateDates: Date[]): Promise<OrderResultTypes>;
}
