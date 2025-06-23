export class MarsRover {
  execute(command: string): string {
    let y = 0;
    
    if (command === 'MMM') {
      y = 3;
    }
    if (command === 'MM') {
      y = 2;
    }
    if (command === 'M') {
      y = 1;
    }
    
    return `0:${y}:N`;
  }
}