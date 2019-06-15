import { InternalStateProvider } from "../internal/internal";

export class VGOStateProvider extends InternalStateProvider{
  constructor(chain: string = 'BTC') {
    super(chain);
  }
}
