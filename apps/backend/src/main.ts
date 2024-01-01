/// <reference types="vite/client" />

/* eslint-disable no-inner-declarations */
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

export const viteNodeApp = NestFactory.create(AppModule);

if (import.meta.env.PROD) {
  async function bootstrap() {
    const nestApp = await viteNodeApp;
    nestApp.listen(3000);
  }

  bootstrap();
}

// export const viteNodeApp = NestFactory.create(AppModule);
