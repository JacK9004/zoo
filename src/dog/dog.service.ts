import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return 'WOW-WOW';
    }

    public introduce(): string {
        return 'I am a dog';
    }

    public modifyDetail(): string {
        return ' Successfully modified';
    }
}
