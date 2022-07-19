import { RxStompConfig } from '@stomp/rx-stomp';

export const webSocketConfig: RxStompConfig = {
  brokerURL: 'ws://localhost:8080/ws',

  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  reconnectDelay: 200,

  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
};
