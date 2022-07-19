import { WebsocketService } from './websocket.service';
import { webSocketConfig } from '../web.socket.config';

export function websocketFactory() {
  const rxStomp = new WebsocketService();
  rxStomp.configure(webSocketConfig);
  rxStomp.activate();
  return rxStomp;
}
