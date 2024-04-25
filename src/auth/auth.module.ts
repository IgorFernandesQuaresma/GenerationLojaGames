import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Bcrypt } from './bcrypt/bcrypt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { UsuarioModule } from './usuario/usuario.module';
import { jwtConstants } from './costants/constants';
import { AuthService } from './services/auth.services';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [Bcrypt],
})
export class AuthModule { }