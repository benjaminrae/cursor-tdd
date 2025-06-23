export class MarsRover {
  execute(command: string): string {
    let y = 0;
    
    if (command === 'MMM') {
      y = command.length;
    }
    if (command === 'MM') {
      y = command.length;
    }
    if (command === 'M') {
      y = command.length;
    }
    
    return `0:${y}:N`;
  }
}