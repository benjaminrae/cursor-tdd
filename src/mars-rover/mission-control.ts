import { MarsRover } from "./index";

export class MissionControl {
  constructor(private rover: MarsRover) {}

  sendCommand(command: string): string {
    return this.rover.execute(command);
  }
}