import { Grid } from './grid';

export class MarsRover {
  constructor(private grid: Grid = new Grid()) {}

  execute(command: string): string {
    let yMovement = 0;
    
    for (const character of command) {
      if (character === 'M') {
        yMovement++;
      }
    }
    
    const yPosition = this.grid.wrapY(yMovement);
    
    return `0:${yPosition}:N`;
  }
}