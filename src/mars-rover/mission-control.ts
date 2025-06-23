import { MarsRover } from "./index";

export class MissionControl {
  constructor(private rover: MarsRover) {}

  sendCommand(command: string): string {
    for (const character of command) {
      const result = this.rover.executeSingleCommand(character);
      if (result) {
        return result;
      }
    }
    return this.rover.getStatus();
  }
}