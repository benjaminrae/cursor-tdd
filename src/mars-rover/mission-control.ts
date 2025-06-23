import { MarsRover } from "./mars-rover";

export class MissionControl {
  constructor(private rover: MarsRover) {}

  sendCommand(command: string): string {
    for (const character of command) {
      const result = this.rover.execute(character);
      if (result) {
        return result;
      }
    }
    return this.rover.getStatus();
  }
}