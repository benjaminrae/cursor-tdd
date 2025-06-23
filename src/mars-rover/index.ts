export class MarsRover {
  execute(command: string): string {
    let yMovement = 0;
    
    for (const character of command) {
      if (character === 'M') {
        yMovement++;
      }
    }
    
    const yPosition = yMovement % 10;
    
    return `0:${yPosition}:N`;
  }
}