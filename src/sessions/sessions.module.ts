import { Module } from '@nestjs/common';
import { SessionService } from './sessions.service';
import { SessionsController } from './sessions.controller';

@Module({
  providers: [SessionService],
  controllers: [SessionsController]
})
export class SessionsModule { }
