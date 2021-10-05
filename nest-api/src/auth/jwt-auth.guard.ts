import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// NOTE - Guard são usados antes do controller para validação
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
