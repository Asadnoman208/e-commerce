import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from '../user/user.controller';
import { User, UserSchema } from '../common/entities/user.entity';
import { Session, SessionSchema } from '../common/entities/session.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SessionService } from '../sessions/sessions.service';
import { UserService } from '../user/user.service';
import { AuthStrategy } from '../common/strategies/auth.strategy';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),
    PassportModule,
    JwtModule.register({
      secret: 'abc',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, SessionService, AuthStrategy],
  exports: [UserService],
})
export class UserModule { }
