import { Injectable } from '@nestjs/common';

export interface iTrack {
  id: string;
  title: string;
  duration: number;
  artist: string;

}

export const tracks: iTrack[] = [
  {
    id: '1',
    title: 'Titulo Uno',
    duration: 120,
    artist: 'Interprete 1',
  },
  {
    id: '2',
    title: 'Titulo Dos',
    duration: 125,
    artist: 'Interprete 2',
  },
  {
    id: '3',
    title: 'Titulo Tres',
    duration: 112,
    artist: 'Interprete 3',
  },
    {
    id: '4',
    title: 'Titulo Cuatro',
    duration: 210,
    artist: 'Interprete 4',
  },
    {
    id: '5',
    title: 'Titulo Cinco',
    duration: 220,
    artist: 'Interprete 5',
  },
    {
    id: '6',
    title: 'Titulo Seis',
    duration: 180,
    artist: 'Interprete 6',
  },
    {
    id: '7',
    title: 'Titulo Siete',
    duration: 130,
    artist: 'Interprete 7',
  },
    {
    id: '8',
    title: 'Titulo Ocho',
    duration: 150,
    artist: 'Interprete 8',
  },

];



@Injectable()
export class AppService {
  getTracks(): iTrack[] {
    return tracks;
  }
}
