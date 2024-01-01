import 'zx/globals';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getData() {
    console.log('aaaba');
    const x = await $`ls -a`.quiet();
    return x.stdout;
  }
}
