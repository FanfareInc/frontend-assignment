import { IFail, IOrderApi, ISuccess, OrderResultTypes } from '~/src/server-api/order';
import { Msecs } from '~/src/core/time';

class Success implements ISuccess {
  readonly type = 'success';
}

class Fail implements IFail {
  readonly type = 'fail';
}

/**
 * この実装は変更せずにそのまま利用してください（成功や失敗の動作を確認するため）
 * このプロジェクトでは簡便性のため、どこからでも new していい事とします
 */
export class StubOrderApi implements IOrderApi {
  private static readonly expectedResponseTime: Msecs = 2_000;

  async order(candidateDates: Date[]): Promise<OrderResultTypes> {
    await wait(StubOrderApi.expectedResponseTime);

    // 実際はこの様なことはしませんが、サーバーの挙動をサンプルとして実現するためです
    if (1 <= candidateDates.length && Math.random() < 0.5) {
      return new Success();
    } else {
      return new Fail();
    }
  }
}

const wait = (duration: Msecs) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
