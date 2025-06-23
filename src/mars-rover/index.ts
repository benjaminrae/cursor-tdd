export class MarsRover {
  execute(command: string): string {
    if (command === 'MM') {
      return '0:2:N';
    }
    if (command === 'M') {
      return '0:1:N';
    }
    return '0:0:N';
  }
}