export class MarsRover {
  execute(command: string): string {
    let y = 0;
    
    for (const character of command) {
      if (character === 'M') {
        y++;
      }
    }
    
    y = y % 10;
    
    return `0:${y}:N`;
  }
}